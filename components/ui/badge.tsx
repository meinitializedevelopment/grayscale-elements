import { type ComponentPropsWithoutRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { Slot } from "@/components/utilities/slot";
import { cn } from "@/library/utilities";

export const badge = cva(
    "focus-visible:ring-offset-background inline-flex h-6 w-fit items-center justify-center gap-1 rounded-full px-3 py-1 text-xs font-medium whitespace-nowrap transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
        variants: {
            variant: {
                primary: "bg-primary text-primary-foreground hover:bg-primary/80 focus-visible:ring-primary",
                secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 focus-visible:ring-secondary",
                destructive:
                    "bg-destructive text-destructive-foreground hover:bg-destructive/80 focus-visible:ring-destructive",
                outline: "bg-background text-foreground hover:bg-muted focus-visible:ring-secondary border",
            },
        },
        defaultVariants: { variant: "primary" },
    }
);

type BadgeProps = ComponentPropsWithoutRef<"span"> & VariantProps<typeof badge> & { asChild?: boolean };

export function Badge({ className, variant, asChild, ...props }: BadgeProps) {
    const Component = asChild ? Slot : "span";

    return <Component className={cn(badge({ variant }), className)} {...props} />;
}
