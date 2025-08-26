import { db } from "@/app/lib/db";
import bcrypt from "bcryptjs";
import { Gender, Role } from "@/app/lib/prisma-client";
import { randomUUID } from "crypto";
import { sendActivationEmail } from "./email.service";
import { RegisterSchema } from "../app/lib/validation/auth.schema";
import { newId, signAccessToken, signRefreshToken } from "@/app/lib/jwt/token";
import { hashToken } from "@/app/lib/jwt/store";
import { cookies } from "next/headers";

export async function signUpUserToDB(body: unknown) {

  const parsed = RegisterSchema.safeParse(body);

  if (!parsed.success) {
    throw {
      status: 400,
      message: "Validation failed",
      error: parsed.error.flatten().fieldErrors
    }
  }

  const data = parsed.data

  let newUser;
  let newToken;

  try {
    // Check if email or phone already exists
    const existingEmail = await db.user.findFirst({
      where: {
        email: data.email
      }
    });

    if (existingEmail) {
      throw {
        status: 409,
        message: "Email already registered"
      }
    }

    const existingPhone = await db.user.findFirst({
      where: {
        phone: data.phone
      }
    });

    if (existingPhone) {
      throw {
        status: 409,
        message: "Phone already registered"
      }
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(data.password, 10);

    // Create user
    newUser = await db.user.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        password: hashedPassword,
        gender: data.gender,
        address: data.address,
        role: Role.student
      },
    });
  } catch (error: any) {
    throw {
        status: 500,
        message: error.message,
        error: error.error
    }
  }

  try {
      // Create activation token
      newToken = await db.activateToken.create({
          data: {
              userId: newUser.id,
              token: `${randomUUID()}${randomUUID()}`.replace(/-/g, "")
          }
      });
  } catch (err) {
      console.error("Token creation failed:", err);
      throw {
          status: 500,
          message: "Could not create token",
          error: err
      }
  }

  try {
    await sendActivationEmail(
      newUser.email,
      newUser.firstName,
      newUser.lastName,
      newToken.token
    );
    return {
        status: 201,
        message: "User registered! Activation link sent through email",
        data: {
          id: newUser.id,
          email: newUser.email
        },
    };
  } catch (err) {
    throw {
      status: 500,
      message: "Could not create user",
      error: err
    }
  }
}

export async function emailVerification(token: string) {
    let user;

    try {
        user = await db.user.findFirst({
            where: {
                activateTokens: {
                    some: {
                        AND: [
                            {
                                activatedAt: null,
                            },
                            {
                                createdAt: {
                                    gt: new Date(Date.now() - 24 * 60 * 60 * 1000)
                                },
                            },
                            {
                                token: token
                            }
                        ]
                    }
                }
            }
        })
    } catch(err) {
        throw {
            status: 500,
            message: "Token expired",
            error: err
        }
    }

    if (user == null) {
        throw {
            status: 401,
            message: "Invalid token"
        }
    }

    console.log("Token:", token);
    console.log("User ID:", user?.id);

    try {
        await db.$transaction([
            db.activateToken.update({
                where: {
                    token,
                },
                data: {
                    activatedAt: new Date()
                }
            }),
            db.user.update({
                where: {
                    id: user.id
                },
                data: {
                    isEmailVerified: true,
                },
            })
        ])
    } catch(err) {
        throw {
            status: 500,
            message: "Internal Server Error",
            error: err
        }
    }

    return {
        message: "Email verified",
        data: user.email
    }
}

export async function signinUser( email:string, password: string, userAgent: string, ip: string ) {

    let user;

    // lookup the user
    try {
        user = await db.user.findUnique({
            where: {
                email,
            }
        })
    } catch(err) {
        console.error("Find user data failed:", err);
        throw {
            status: 400,
            message: "Internal Server Error",
            error: err
        }
    }

    if (user == null) {
        throw {
            status: 401,
            message: "Invalid email or password"
        }
    }

    // compare password
    const isCorrectPassword = await bcrypt.compare(password,user.password);
    if (!isCorrectPassword) {
      throw {
        status: 401,
        message: "Invalid email or password"
      }
    }

    const isActive = user.isEmailVerified
    if(!isActive) {
      throw {
        status: 403,
        message: "Account not active"
      }
    }

    const familyId = randomUUID()
    const jti = newId()
    const payload = {
        userId: user.id,
        familyId,
        jti,
        tokenVersion: 0
    }

    // create jwt token
    const accessToken = await signAccessToken(user.id, user.role)
    const refreshToken = await signRefreshToken(payload)

    try {
        await db.refreshToken.create({
            data: {
                userId: user.id,
                jti,
                familyId,
                hashedToken: hashToken(refreshToken),
                expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
                userAgent,
                ip
            }
        })
    } catch(err) {
        console.error("error persist refresh token", err);
        throw {
            status: 500,
            message: "Internal Server Error",
            error: err
        }
    }

    const cookieStore = await cookies();
    cookieStore.set({
        name: 'AccessToken',
        value: accessToken,
        secure: false,
        httpOnly: true,
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000 * 7),
        path: '/',
        sameSite: 'strict'
    });
    cookieStore.set({
        name: 'RefreshToken',
        value: refreshToken,
        secure: false,
        httpOnly: true,
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000 * 7),
        path: '/',
        sameSite: 'strict'
    });

    // response
    return {
        data: {
            accessToken,
            refreshToken,
            user
        },
        message: "Login success",
    }
}