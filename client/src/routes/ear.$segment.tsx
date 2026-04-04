import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/ear/$segment')({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">

        </div>
    )
}
