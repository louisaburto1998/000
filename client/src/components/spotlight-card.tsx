import type { Spotlight } from "shared";

import { EmblaImgCarousel } from "@client/components/ui/misc";
import {
    SpotlightHeader,
    SpotlightInfo,
    SpotlightShell,
} from "@client/components/ui/spotlight";

export function SpotlightCard({ spotlight }: { spotlight: Spotlight }) {
	return (
        <>
            <SpotlightHeader icon={spotlight.icon} route={spotlight.route} title={spotlight.title} url={spotlight.url} />
            <SpotlightShell>
                <EmblaImgCarousel images={spotlight.imgs} title={spotlight.title} />
                <SpotlightInfo info={spotlight.info} />
            </SpotlightShell>
        </>
	);
}