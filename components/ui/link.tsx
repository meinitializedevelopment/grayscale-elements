import { type ComponentPropsWithoutRef } from "react";

import { Slot } from "@/components/utilities/slot";
import { cn } from "@/library/utilities";

type LinkProps = ComponentPropsWithoutRef<"a"> & { asChild?: boolean };

export function Link({ className, asChild, ...props }: LinkProps) {
    const Component = asChild ? Slot : "a";

    return (
        <Component
            className={cn(
                "text-sm font-medium underline-offset-4 hover:underline focus-visible:underline focus-visible:outline-none",
                className
            )}
            {...props}
        />
    );
}
