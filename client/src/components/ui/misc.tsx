import useEmblaCarousel from "embla-carousel-react";

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