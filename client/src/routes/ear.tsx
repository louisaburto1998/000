import { createFileRoute } from "@tanstack/react-router";
import { Outlet } from "@tanstack/react-router";

import {
	NavBarSubHeader,
	NavBarSubRoutes
} from "@client/components/ui/nav";

import { earApps } from "@client/lib/admin";

export const Route = createFileRoute("/ear")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<NavBarSubHeader>
				{earApps.map((app) => (
					<NavBarSubRoutes key={app.title} app={app} />
				))}
			</NavBarSubHeader>
			<div className="flex flex-col items-center justify-center w-full p-2 gap-2">
				<Outlet />
			</div>
		</>
	)
}
