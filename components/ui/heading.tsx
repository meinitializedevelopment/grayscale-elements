import { type ComponentPropsWithoutRef } from "react";

import { Slot } from "@/components/utilities/slot";
import { cn } from "@/library/utilities";

type HeadingProps = ComponentPropsWithoutRef<"h1"> & { asChild?: boolean };

export function Heading({ className, asChild, ...props }: HeadingProps) {
    const Component = asChild ? Slot : "h1";

    return (
        <Component
            className={cn(
                "scroll-m-20 text-center text-4xl leading-tight font-bold tracking-tight text-balance md:text-5xl",
                "[h2&]:text-3xl [h3&]:text-xl [h3&]:font-semibold",
                className
            )}
            {...props}
        />
    );
}
