import type { Admin, App } from "shared";

export const admin: Admin = {
    version: "0.0.0",
    icon: "Origami",
    url: "https://github.com/louisaburto1998",
    apps: [
        {
            title: "Ear",
            icon: "Ear",
            route: "/ear",
        },
        {
            title: "Eye",
            icon: "Eye",
            route: "/eye",
        },
        {
            title: "Brain",
            icon: "Brain",
            route: "/brain",
        },
    ],
};

export const earApps: App[] = [
    {
        title: "Albums",
        icon: "Disc3",
        route: "/ear/albums",
    },
    {
        title: "Artists",
        icon: "User",
        route: "/ear/artists",
    },
    {
        title: "Labels",
        icon: "Factory",
        route: "/ear/labels",
    },
];