import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Enter a valid email address."),
  password: z.string().min(8, "Password must be at least 8 characters."),
});

export const registerSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters.").trim(),
  email: z.string().email("Enter a valid email address."),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters.")
    .regex(/[a-zA-Z]/, "Password must contain a letter.")
    .regex(/[0-9]/, "Password must contain a number."),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  path: ["confirmPassword"],
  message: "Passwords do not match.",
});

export const forgotPasswordSchema = z.object({
  email: z.string().email("Enter a valid email address."),
});

export const resetPasswordSchema = z.object({
  password: z
    .string()
    .min(8, "Password must be at least 8 characters.")
    .regex(/[a-zA-Z]/, "Password must contain a letter.")
    .regex(/[0-9]/, "Password must contain a number."),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  path: ["confirmPassword"],
  message: "Passwords do not match.",
});

export const domainQuerySchema = z.object({
  domain: z
    .string()
    .trim()
    .min(3, "Enter a domain.")
    .regex(/^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Enter a valid domain."),
});

export const usernameQuerySchema = z.object({
  username: z
    .string()
    .trim()
    .min(2, "Enter a username.")
    .max(64, "Username is too long.")
    .regex(/^[a-zA-Z0-9._-]+$/, "Only letters, numbers, dots, underscores and hyphens."),
});

export const emailQuerySchema = z.object({
  email: z.string().email("Enter a valid email address."),
});

export const ipQuerySchema = z.object({
  ip: z
    .string()
    .trim()
    .regex(
      /^(?:(?:25[0-5]|2[0-4]\d|1?\d?\d)\.){3}(?:25[0-5]|2[0-4]\d|1?\d?\d)$|^[0-9a-fA-F:]+$/,
      "Enter a valid IP address."
    ),
});

export const companyQuerySchema = z.object({
  name: z.string().trim().min(2, "Enter a company name."),
  website: z
    .string()
    .trim()
    .optional()
    .refine((v) => !v || /^https?:\/\/.+/i.test(v), "Enter a valid URL."),
});

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;