import { Link } from "@tanstack/react-router";
import { getIcon } from "@client/lib/utils";

import type { LucideIcon } from "lucide-react";

export function SpotlightShell({ children }: { children: React.ReactNode[] }) {
	return (
		<div className="flex flex-col md:flex-row gap-2">
            <div className="w-full md:w-[30%] aspect-square border border-zinc-800 rounded-sm p-1">
                {children[0]}
            </div>
            <div className="w-full md:w-[70%]">
                {children[1]}
            </div>
        </div>
	);
}

export function SpotlightHeader({ icon, route, title, url }: { icon: string, route: string, title: string, url: string }) {
    const Icon = getIcon(icon) as LucideIcon;
	return (
		<div className="flex w-full justify-start items-center p-2 gap-2">
			<Link to={route}>
				<Icon className="size-4 stroke-zinc-200 hover:stroke-teal-200" />
			</Link>
            <a href={url} target="_blank" rel="noopener noreferrer">
                <h1 className="text-base text-zinc-200 hover:text-sky-200">{title}</h1>
            </a>
		</div>
	);
}

export function SpotlightInfo({ info }: { info: Record<string, string> }) {
	return (
		<div className="flex flex-col gap-2 border border-zinc-800 rounded-sm p-2">
			{Object.entries(info).map(([key, value]) => (
				<h2 key={key} className="text-xs md:text-sm">
					<span className="text-zinc-400">{key}: </span>
					<span className="text-zinc-200">{value}</span>
				</h2>
			))}
		</div>
	);
}