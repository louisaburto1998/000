import { admin } from "@client/lib/admin"

import {
    BodyInset,
    NavBarBrand,
    NavBarGithub,
    NavBarHeader,
    NavBarRoutes,
} from "@client/components/ui/nav"

export function Navbar({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen tracking-tighter">
            <NavBarHeader>
                <NavBarBrand icon={admin.icon} />
                <NavBarRoutes apps={admin.apps} />
                <NavBarGithub url={admin.url} />
            </NavBarHeader>
            <BodyInset>
                {children}
            </BodyInset>
        </div>
    );
}
