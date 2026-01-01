import { type ComponentPropsWithoutRef } from "react";

import { Slot } from "@/components/utilities/slot";
import { cn } from "@/library/utilities";

export function Nav({ className, ...props }: ComponentPropsWithoutRef<"nav">) {
    return <nav className={cn("w-full", className)} {...props} />;
}

export function NavList({ className, ...props }: ComponentPropsWithoutRef<"ul">) {
    return <ul className={cn("flex items-center gap-4", className)} {...props} />;
}

export function NavItem({ className, ...props }: ComponentPropsWithoutRef<"li">) {
    return <li className={cn("inline-flex items-center", className)} {...props} />;
}

type NavLinkProps = ComponentPropsWithoutRef<"a"> & { asChild?: boolean };

export function NavLink({ className, asChild, ...props }: NavLinkProps) {
    const Component = asChild ? Slot : "a";

    return (
        <Component
            className={cn(
                "text-muted-foreground hover:text-primary text-sm font-medium underline-offset-2 transition-colors focus-visible:underline focus-visible:outline-none",
                className
            )}
            {...props}
        />
    );
}
