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
    reason: z.string().min(10, {
        message: "Please provide a reason for treatment (min 10 characters).",
    }),
    healingType: z.enum(['direct', 'distance']),
    country: z.string().optional(),
    image: z.any().optional(),
    slot: z.string().optional(),
});

export type LeadFormValues = z.infer<typeof leadFormSchema>;
