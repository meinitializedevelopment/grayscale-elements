import { type ComponentPropsWithoutRef } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

import { Slot } from "@/components/utilities/slot";
import { cn } from "@/library/utilities";

export function Breadcrumb({ className, ...props }: ComponentPropsWithoutRef<"nav">) {
    return <nav className={cn("w-full", className)} {...props} />;
}

export function BreadcrumbList({ className, ...props }: ComponentPropsWithoutRef<"ol">) {
    return <ol className={cn("flex flex-wrap items-center gap-2", className)} {...props} />;
}

export function BreadcrumbItem({ className, ...props }: ComponentPropsWithoutRef<"li">) {
    return <li className={cn("inline-flex items-center", className)} {...props} />;
}

type BreadcrumbLinkProps = ComponentPropsWithoutRef<"a"> & { asChild?: boolean };

export function BreadcrumbLink({ className, asChild, ...props }: BreadcrumbLinkProps) {
    const Component = asChild ? Slot : "a";

    return (
        <Component
            className={cn(
                "text-muted-foreground hover:text-primary inline-flex items-center gap-1 text-sm font-medium underline-offset-4 transition-colors focus-visible:underline focus-visible:outline-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
                className
            )}
            {...props}
        />
    );
}

export function BreadcrumbPage({ className, ...props }: ComponentPropsWithoutRef<"span">) {
    return (
        <span
            className={cn(
                "inline-flex items-center gap-1 text-sm font-medium [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
                className
            )}
            {...props}
        />
    );
}

export function BreadcrumbSeparator({ children, className, ...props }: ComponentPropsWithoutRef<"li">) {
    return (
        <li className={cn("[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", className)} {...props}>
            {children ?? <ChevronRightIcon />}
        </li>
    );
}
