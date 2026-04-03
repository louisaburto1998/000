import { Link } from "@tanstack/react-router";
import { getIcon, GithubIcon } from "@client/lib/utils";

import type { LucideIcon } from "lucide-react";
import type { App } from "shared";

export function NavBarHeader({ children }: { children: React.ReactNode }) {
    return (
        <div className="fixed inset-x-0 top-0 z-10 border-b border-zinc-800">
            <div className="bg-black w-full">
                <div className="flex h-10 items-center justify-between mx-4">
                    {children}
                </div>
            </div>
        </div>
    );
}

export function NavBarBrand({ icon, title }: { icon: string, title: string }) {
    const Icon = getIcon(icon) as LucideIcon;
    return (
        <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
                <Icon className="size-4 stroke-zinc-200 hover:stroke-teal-200" />
                <h1 className="hidden md:block text-sm text-zinc-200 hover:text-teal-200">{title}</h1>
            </Link>
        </div>
    );
}

export function NavBarRoutes({ apps }: { apps: App[] }) {
    return (
        <div className="flex items-center gap-2">
            {apps.map((app) => (
                <Link key={app.title} to={app.route} className="flex items-center gap-2">
                    <h2 className="text-sm text-zinc-200 hover:text-teal-200">{app.title}</h2>
                </Link>
            ))}
        </div>
    );
}

export function NavbarGithub({ url }: { url: string }) {
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
        <div className="fixed inset-x-0 top-10 bottom-0 p-2">
            <div className="h-full min-h-0 w-full overflow-y-auto bg-black border border-zinc-800 rounded-sm">
                <div className="flex w-full flex-col">
                    {children}
                </div>
            </div>
        </div>
    );
}
