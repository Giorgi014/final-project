import { z } from "zod";

const nameSchema = z.string().trim().min(1, "Full name is required");

const emailSchema = z
  .string()
  .min(1, "Email is required")
  .pipe(z.email("Invalid email format"));

const passwordSchema = z
  .string()
  .min(8, "The password must contain at least 8 characters.")
  .regex(/[A-Z]/, "Add at least one uppercase letter")
  .regex(/[a-z]/, "Add at least one lowercase letter")
  .regex(/[0-9]/, "Add at least one digit");

export const signInSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export const signUpSchema = z
  .object({
    email: emailSchema,
    password: passwordSchema,
    repeatPassword: z.string().min(1, "Please repeat your password"),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "Passwords do not match.",
    path: ["repeatPassword"],
  });

export const contactSchema = z.object({
  fullName: nameSchema,
  email: emailSchema,
  discussion: z.string().trim().min(1, "Discussion is required"),
});

export type SignInValues = z.infer<typeof signInSchema>;
export type SignUpValues = z.infer<typeof signUpSchema>;
export type ContactValues = z.infer<typeof contactSchema>;
