import { z } from "zod";

export const nameSchema = z.string().trim().min(1, "Full name is required");

export const emailSchema = z
  .string()
  .min(1, "Email is required")
  .pipe(z.email("Invalid email format"));
