import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/ear/$segment')({
    component: RouteComponent,
});

function RouteComponent() {
    return <div className="text-2xl font-bold text-zinc-200">Hello "/ear/$segment"!</div>;
}
