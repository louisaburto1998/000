import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import { Navbar } from "@client/components/navbar";

export const Route = createRootRoute({
	component: () => (
		<>
			<Navbar>
				<Outlet />
			</Navbar>
			<TanStackRouterDevtools />
		</>
	),
});
