import { admin } from "@client/lib/admin"

import {
    BodyInset,
    NavBarBrand,
    NavbarGithub,
    NavBarHeader,
    NavBarRoutes,
} from "@client/components/ui/nav"

export function Navbar({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen tracking-tighter">
            <NavBarHeader>
                <NavBarBrand icon={admin.icon} title={admin.version} />
                <NavBarRoutes apps={admin.apps} />
                <NavbarGithub url={admin.url} />
            </NavBarHeader>
            <BodyInset>
                {children}
            </BodyInset>
        </div>
    );
}
