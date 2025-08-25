import { db } from "@/app/lib/db";
import bcrypt from "bcryptjs";
import { Gender, Role } from "@/app/lib/prisma-client";
import { randomUUID } from "crypto";
import { sendActivationEmail } from "./email.service";
import { RegisterSchema } from "../lib/validation/auth.schema";

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