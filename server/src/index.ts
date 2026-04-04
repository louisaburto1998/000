import { Hono } from "hono";
import { cors } from "hono/cors";

import { spotlightSchema, albumTileSchema } from "shared";
import homeSpotlights from "@server/data/spotlights/homeSpotlights.json";
import earSpotlights from "@server/data/spotlights/earSpotlights.json";
import earAlbums from "@server/data/ear/albums.json";
const homeSpotlightsValidated = spotlightSchema.array().parse(homeSpotlights);
const earSpotlightsValidated = spotlightSchema.array().parse(earSpotlights);
const earAlbumsTiles = albumTileSchema.array().parse(earAlbums);

export const app = new Hono()

.use(cors())

.get("/api/spotlights/home", (c) => {
    return c.json(homeSpotlightsValidated);
})

.get("/api/spotlights/ear", (c) => {
    return c.json(earSpotlightsValidated);
})

.get("/api/ear/albums", (c) => {
    return c.json(earAlbumsTiles);
})

const port = Number(process.env.PORT) || 3001;

export default {
	port,
	fetch: app.fetch,
};