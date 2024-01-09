import * as z from 'zod'


export const profileSchema = z.object({
    firstname: z.string(),
    lastname: z.string(),
    email: z.string(),
});