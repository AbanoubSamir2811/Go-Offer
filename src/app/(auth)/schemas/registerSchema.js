"use server";
import { z } from "zod";

export const registerSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    password_confirmation: z.string().min(6, "Password must be at least 6 characters"),
    name: z.string().min(7, "Full name must be at least 7 characters"),
    phone: z.string().regex(/^\d+$/, "Invalid phone number"),
    gender: z.enum(["Male", "Female", "other"], "Invalid gender"),
    country_code: z.string(),
    country_id: z.string(),
    platform: z.string(),
    // referral_code: z.string().optional(),
    lang: z.string(),
}).refine((data) => data.password === data.password_confirmation, {
    message: "Passwords must match",
    path: ["password_confirmation"],
});
