import { z } from "zod";

export const spotlightSchema = z.object({
    title: z.string(),
    route: z.string(),
    icon: z.string(),
    url: z.url(),
    imgs: z.array(z.string()),
    info: z.record(z.string(), z.string()),
});

export type Spotlight = z.infer<typeof spotlightSchema>;
