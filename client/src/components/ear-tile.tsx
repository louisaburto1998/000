import type { TileProps } from "shared";

import traum from "/traum.png"
const FALLBACK_COVER = traum;

export function EarTile({ tile }: { tile: TileProps }) {
    return (
        <div className="flex flex-col border border-zinc-800 rounded-sm p-2 w-full">
            <div className="w-full aspect-square border border-zinc-800 rounded-sm p-1">
                <img src={tile.cover ?? FALLBACK_COVER} alt={tile.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-2 w-full truncate">
                <h2 className="text-sm text-zinc-200 w-full truncate">{tile.title}</h2>
                {tile.subtitle && (
                    <h2 className="text-sm text-zinc-400 w-full truncate">{tile.subtitle}</h2>
                )}
            </div>
        </div>
    );
}