import { z } from "zod";

export const forgotPasswordSchema = z.object({
    email:z.string().email('e-mail invalido')
})

export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>