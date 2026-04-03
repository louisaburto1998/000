import { z } from "zod";

export const appSchema = z.object({
    title: z.string(),
    icon: z.string(),
    route: z.string(),
});

export type App = z.infer<typeof appSchema>;

export const adminSchema = z.object({
    version: z.string(),
	icon: z.string(),
    url: z.url(),
    apps: z.array(appSchema),
});

export type Admin = z.infer<typeof adminSchema>;
