import { z } from "zod";
import { emailSchema, nameSchema } from "./common";

export const contactSchema = z.object({
  fullName: nameSchema,
  email: emailSchema,
  discussion: z.string().trim().min(1, "Discussion is required"),
});

export type ContactValues = z.infer<typeof contactSchema>;
