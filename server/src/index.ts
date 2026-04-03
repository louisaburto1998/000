import { Hono } from "hono";
import { cors } from "hono/cors";

import { spotlightSchema } from "shared";
import homeSpotlights from "@server/data/spotlights/homeSpotlights.json";
const homeSpotlightsValidated = spotlightSchema.array().parse(homeSpotlights);

export const app = new Hono()

.use(cors())

.get("/api/spotlights/home", (c) => {
    return c.json(homeSpotlightsValidated);
})

const port = Number(process.env.PORT) || 3001;

export default {
	port,
	fetch: app.fetch,
};