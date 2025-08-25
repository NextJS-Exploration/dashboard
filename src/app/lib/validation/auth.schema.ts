import z from "zod";
import { Gender } from "../prisma-client";

const genderOptions = Object.values(Gender);

export const RegisterSchema = z.object({
  firstName: z.string().nonempty("First name is required"),
  lastName: z.string().nonempty("Last name is required"),
  email: z.string().email("Email format is invalid").nonempty("Email is required"),
  phone: z.string().nonempty("Phone number is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  passwordConfirmation: z.string().nonempty("Please confirm your password"),
  gender: z.nativeEnum(Gender)
    .refine((val) => !!val && genderOptions.includes(val), {
      message: `Please select a valid gender. Options: ${genderOptions.join(", ")}`
    }),
  address: z.string().nonempty("Address is required")
}).refine((data) => data.password === data.passwordConfirmation, {
  message: "Passwords don't match",
  path: ["passwordConfirmation"],
});


export const LoginSchema = z.object({
  email: z.string().email("Email format is invalid"),
  password: z.string()
})