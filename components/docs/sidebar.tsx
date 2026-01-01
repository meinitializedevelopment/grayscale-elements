import Link from "next/link";

import { Text } from "@/components/ui/text";
import { Nav, NavItem, NavLink, NavList } from "@/components/ui/nav";
import { button } from "@/components/ui/button";

import { DOCS_SIDEBAR_NAVIGATION_LINKS } from "@/constants/navigation";
import { cn } from "@/library/utilities";

export function DocsSidebar() {
    return (
        <div className="sticky top-20 h-[calc(100vh-80px)] w-72 shrink-0 space-y-6 overflow-y-auto py-6 max-md:hidden">
            {DOCS_SIDEBAR_NAVIGATION_LINKS.map((item) => {
                const links =
                    item.label.toLowerCase() === "get started"
                        ? item.links
                        : item.links.sort((a, b) => a.label.localeCompare(b.label));

                return (
                    <div key={item.label} className="space-y-2">
                        <Text size="small" className="text-muted-foreground px-6 font-medium">
                            {item.label}
                        </Text>
                        <Nav>
                            <NavList className="flex-col items-start gap-0 px-3">
                                {links.map((child) => (
                                    <NavItem key={child.label}>
                                        <NavLink asChild className={cn(button({ variant: "ghost", size: "small" }))}>
                                            <Link href={child.href}>
                                                <span>{child.label}</span>
                                            </Link>
                                        </NavLink>
                                    </NavItem>
                                ))}
                            </NavList>
                        </Nav>
                    </div>
                );
            })}
        </div>
    );
}
