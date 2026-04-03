import useEmblaCarousel from "embla-carousel-react";

import { AnnoyedIcon, BugIcon } from "lucide-react";

export function EmblaImgCarousel({ images, title }: { images: string[], title: string }) {
	const [emblaRef] = useEmblaCarousel({ loop: true });
	return (
		<div key={title} className="embla flex flex-col w-full aspect-square cursor-grab">
			<div className="w-full h-full overflow-hidden" ref={emblaRef}>
				<div className="flex h-full">
					{images.map((image) => (
						<div key={image} className="flex-[0_0_100%] h-full">
							<img src={image} alt={image} className="w-full h-full object-cover rounded-sm" />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export function Loading() {
	return (
		<div className="flex flex-col items-center justify-center gap-2 h-full mt-10">
			<AnnoyedIcon className="size-12 stroke-zinc-200 hover:stroke-rose-200 animate-spin" />
			<h1 className="text-base text-zinc-200 hover:text-rose-200 cursor-default">Loading...</h1>
		</div>
	);
}

export function ErrorMessage({ error }: { error: string }) {
	return (
		<div className="flex flex-col items-center justify-center gap-2 h-full mt-10">
			<BugIcon className="size-12 stroke-zinc-200 hover:stroke-rose-200" />
			<h1 className="text-base text-zinc-200 hover:text-rose-200 cursor-default">{error}</h1>
		</div>
	);
}