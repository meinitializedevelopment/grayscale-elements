import { type ComponentPropsWithoutRef } from "react";

import { cn } from "@/library/utilities";

export function Container({ className, ...props }: ComponentPropsWithoutRef<"div">) {
    return <div className={cn("mx-auto w-full max-w-7xl overflow-hidden p-6", className)} {...props} />;
}
