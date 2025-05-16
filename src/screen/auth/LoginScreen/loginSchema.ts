import { z } from "zod";



export const loginSchema = z.object({
    email:z.string().email('e-mail invalido'),
    password: z.string().min(1,'senha obrigatoria')
})

export type LoginSchema = z.infer<typeof loginSchema>