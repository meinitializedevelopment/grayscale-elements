"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { Nav, NavItem, NavLink, NavList } from "@/components/ui/nav";

import { TOC_SIDEBAR_NAVIGATION_LINKS } from "@/constants/navigation";

export function TOCSidebar() {
    const pathname = usePathname();

    const splitted = pathname.split("/");
    const page = splitted[splitted.length - 1].toUpperCase();

    const links = TOC_SIDEBAR_NAVIGATION_LINKS[page as keyof typeof TOC_SIDEBAR_NAVIGATION_LINKS] ?? [];

    return (
        <aside className="sticky top-20 flex h-[calc(100vh-80px)] w-80 shrink-0 flex-col gap-6 overflow-y-auto p-6 max-xl:hidden">
            <Text className="mt-0! font-semibold">On this page</Text>
            <Nav>
                <NavList className="flex-col items-start gap-3">
                    {links.map((item) => (
                        <NavItem key={item.label}>
                            <NavLink asChild>
                                <Link href={item.href}>{item.label}</Link>
                            </NavLink>
                        </NavItem>
                    ))}
                </NavList>
            </Nav>
            <Card className="bg-muted mt-auto">
                <CardHeader className="p-4">
                    <CardTitle>Liking this project?</CardTitle>
                    <CardDescription className="text-foreground/80">
                        Consider giving it a star on GitHub to show your support!
                    </CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                    <Button asChild size="small" className="w-full">
                        <a
                            href="https://github.com/meinitializedevelopment/grayscale-elements/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span>⭐ Star on GitHub</span>
                        </a>
                    </Button>
                </CardContent>
            </Card>
        </aside>
    );
}
