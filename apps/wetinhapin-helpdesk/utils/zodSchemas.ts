import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Invalid email address")
    .min(1, { message: "Email is required" })
    .max(100,  { message: "Email must be less than 20 characters" }),
});