import * as z from 'zod';

export const leadFormSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    phone: z.string().min(10, {
        message: "Please enter a valid phone number.",
    }),
    interest: z.string().min(1, {
        message: "Please select a treatment interest.",
    }),
    image: z.any().optional(),
    message: z.string().optional(),
});

export type LeadFormValues = z.infer<typeof leadFormSchema>;
