import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: Index,
});

export default function Index() {
	return (
		<div>
			<h1>Hello World</h1>
		</div>
	);
}
