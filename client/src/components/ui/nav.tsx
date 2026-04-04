import { Link } from "@tanstack/react-router";
import { getIcon, GithubIcon } from "@client/lib/utils";

import type { LucideIcon } from "lucide-react";
import type { App } from "shared";

export function NavBarHeader({ children }: { children: React.ReactNode }) {
    return (
        <div className="fixed inset-x-0 top-0 z-10 border-b border-zinc-800">
            <div className="bg-black w-full">
                <div className="flex h-10 items-center justify-between mx-6">
                    {children}
                </div>
            </div>
        </div>
    );
}

export function NavBarBrand({ icon }: { icon: string }) {
    const Icon = getIcon(icon) as LucideIcon;
    return (
        <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
                <Icon className="size-4 stroke-zinc-200 hover:stroke-teal-200" />
            </Link>
        </div>
    );
}

export function NavBarRoutes({ apps }: { apps: App[] }) {
    return (
        <div className="flex items-center gap-4">
            {apps.map((app) => (
                <Link key={app.title} to={app.route} className="flex items-center">
                    <h2 className="text-sm text-zinc-200 hover:text-teal-200">{app.title}</h2>
                </Link>
            ))}
        </div>
    );
}

export function NavBarGithub({ url }: { url: string }) {
	return (
		<div className="flex items-center">
			<a href={url} target="_blank" rel="noopener noreferrer">
				<GithubIcon className="size-4 stroke-zinc-200 hover:stroke-sky-200" />
			</a>
		</div>
	);
}

export function BodyInset({ children }: { children: React.ReactNode }) {
    return (
        <div className="fixed inset-x-0 top-10 bottom-0">
            <div className="h-full min-h-0 w-full overflow-y-auto bg-black border border-zinc-800">
                <div className="flex w-full flex-col">
                    {children}
                </div>
            </div>
        </div>
    );
}

export function NavBarSubHeader({ children }: { children: React.ReactNode }) {
    return (
        <div className="sticky top-0 z-10 border-b border-zinc-800">
            <div className="bg-black w-full">
                <div className="flex h-8 items-center justify-center mx-4 gap-6">
                    {children}
                </div>
            </div>
        </div>
    );
}

export function NavBarSubRoutes({ app }: { app: App }) {
    const Icon = getIcon(app.icon) as LucideIcon;
    return (
        <Link key={app.title} to={app.route} className="flex items-center gap-2">
            <Icon className="size-4 stroke-zinc-200 hover:stroke-teal-200" />
            <h2 className="hidden md:block text-sm text-zinc-200 hover:text-teal-200">{app.title}</h2>
        </Link>
    );
}
