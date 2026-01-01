import { type ComponentPropsWithoutRef } from "react";

import { cn } from "@/library/utilities";

export function Card({ className, ...props }: ComponentPropsWithoutRef<"div">) {
    return (
        <div className={cn("bg-background flex flex-col overflow-hidden rounded-lg border", className)} {...props} />
    );
}

export function CardHeader({ className, ...props }: ComponentPropsWithoutRef<"div">) {
    return <div className={cn("flex flex-col gap-2 p-6", className)} {...props} />;
}

export function CardTitle({ className, ...props }: ComponentPropsWithoutRef<"p">) {
    return <p className={cn("text-lg leading-tight font-semibold", className)} {...props} />;
}

export function CardDescription({ className, ...props }: ComponentPropsWithoutRef<"p">) {
    return <p className={cn("text-muted-foreground text-sm", className)} {...props} />;
}

export function CardContent({ className, ...props }: ComponentPropsWithoutRef<"div">) {
    return <div className={cn("p-6 pt-0", className)} {...props} />;
}

export function CardFooter({ className, ...props }: ComponentPropsWithoutRef<"div">) {
    return <div className={cn("flex items-center p-6 pt-0", className)} {...props} />;
}
