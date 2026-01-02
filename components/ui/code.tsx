import { type ComponentPropsWithoutRef } from "react";

import { Slot } from "@/components/utilities/slot";
import { cn } from "@/library/utilities";

type CodeProps = ComponentPropsWithoutRef<"code"> & { asChild?: boolean };

export function Code({ className, asChild, ...props }: CodeProps) {
    const Component = asChild ? Slot : "code";

    return (
        <Component
            className={cn(
                "bg-muted rounded border px-1 py-0.5 font-mono text-xs font-medium [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
                className
            )}
            {...props}
        />
    );
}
