import { type ComponentPropsWithoutRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { Slot } from "@/components/utilities/slot";
import { cn } from "@/library/utilities";

export const button = cva(
    "focus-visible:ring-offset-background inline-flex cursor-pointer items-center justify-center rounded text-sm font-medium whitespace-nowrap transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none! [&_svg]:size-4! [&_svg]:shrink-0!",
    {
        variants: {
            variant: {
                primary: "bg-primary text-primary-foreground hover:bg-primary/80 focus-visible:ring-primary",
                secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 focus-visible:ring-secondary",
                destructive:
                    "bg-destructive text-destructive-foreground hover:bg-destructive/80 focus-visible:ring-destructive",
                outline: "bg-background text-foreground hover:bg-muted focus-visible:ring-secondary border",
                ghost: "text-foreground hover:bg-muted focus-visible:ring-secondary bg-transparent",
            },
            size: { small: "h-8 gap-1 px-3 py-2", medium: "h-10 gap-2 px-4 py-3", icon: "size-8" },
        },
        defaultVariants: { variant: "primary", size: "medium" },
    }
);

type ButtonProps = ComponentPropsWithoutRef<"button"> & VariantProps<typeof button> & { asChild?: boolean };

export function Button({ className, variant, size, asChild, ...props }: ButtonProps) {
    const Component = asChild ? Slot : "button";

    return <Component className={cn(button({ variant, size }), className)} {...props} />;
}
