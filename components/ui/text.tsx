import { type ComponentPropsWithoutRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { Slot } from "@/components/utilities/slot";
import { cn } from "@/library/utilities";

const variants = cva("not-first:mt-6", {
    variants: {
        size: { small: "text-xs leading-snug", medium: "text-sm leading-normal", large: "text-base leading-normal" },
    },
    defaultVariants: { size: "medium" },
});

type TextProps = ComponentPropsWithoutRef<"p"> & VariantProps<typeof variants> & { asChild?: boolean };

export function Text({ className, size, asChild, ...props }: TextProps) {
    const Component = asChild ? Slot : "p";

    return <Component className={cn(variants({ size }), className)} {...props} />;
}
