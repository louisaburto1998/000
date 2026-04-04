import { z } from "zod";

export const albumTileSchema = z.object({
    name: z.string(),
    slug: z.string(),
    join_aa: z.string(),
    cover: z.string().optional().default(""),
});

export type AlbumTile = z.infer<typeof albumTileSchema>;

export const tilePropsSchema = z.object({
    title: z.string(),
    subtitle: z.string().optional().default(""),
    cover: z.string().optional().default(""),
});

export type TileProps = z.infer<typeof tilePropsSchema>;