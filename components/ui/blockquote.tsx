import { type ComponentPropsWithoutRef } from "react";

import { cn } from "@/library/utilities";

export function Blockquote({ className, ...props }: ComponentPropsWithoutRef<"blockquote">) {
    return (
        <blockquote
            className={cn("mt-6 border-s-4 ps-4 text-base leading-relaxed font-medium italic", className)}
            {...props}
        />
    );
}
