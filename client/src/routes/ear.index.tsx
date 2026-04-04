import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";

import { fetchEarSpotlights } from "@client/lib/apis";

import { SpotlightCard } from "@client/components/spotlight-card";
import { Loading, ErrorMessage } from "@client/components/ui/misc";

export const Route = createFileRoute("/ear/")({
	component: RouteComponent,
});

function RouteComponent() {
	const { data, isPending, isError, error } = useQuery({
		queryKey: ["spotlights", "ear"],
		queryFn: fetchEarSpotlights,
	})
	if (isError) {
		return <ErrorMessage error={error.message} />;
	}
	return (
		isPending ? (
			<Loading />
		) : (
            data.map(spotlight => (
                <SpotlightCard key={spotlight.title} spotlight={spotlight} />
            ))
		)
	)
}