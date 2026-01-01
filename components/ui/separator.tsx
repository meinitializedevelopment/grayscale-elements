import { type ComponentPropsWithoutRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/library/utilities";

const variants = cva("bg-border", {
    variants: { orientation: { horizontal: "h-px w-full", vertical: "h-full w-px" } },
    defaultVariants: { orientation: "horizontal" },
});

type SeparatorProps = ComponentPropsWithoutRef<"div"> & VariantProps<typeof variants>;

export function Separator({ orientation, className, ...props }: SeparatorProps) {
    return <div className={cn(variants({ orientation }), className)} {...props} />;
}
