import { type ComponentPropsWithoutRef } from "react";

import { cn } from "@/library/utilities";

export function Section({ className, ...props }: ComponentPropsWithoutRef<"section">) {
    return <section className={cn("py-6 sm:py-12", className)} {...props} />;
}
