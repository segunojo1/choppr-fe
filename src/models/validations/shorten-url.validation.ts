import { z } from "zod"

export const shortenURLValidationSchema = z.object({
    url: z.string().url({ message: "Invalid url" }),
})

export type shortenURLFormDef = z.infer<
  typeof shortenURLValidationSchema
>;