import { type ComponentPropsWithoutRef } from "react";

import { cn } from "@/library/utilities";

export function Table({ className, ...props }: ComponentPropsWithoutRef<"table">) {
    return (
        <div className="relative w-full overflow-x-auto">
            <table className={cn("w-full text-sm", className)} {...props} />
        </div>
    );
}

export function TableHeader({ className, ...props }: ComponentPropsWithoutRef<"thead">) {
    return <thead className={cn("[&_tr]:bg-background [&_tr]:hover:bg-background border-b", className)} {...props} />;
}

export function TableBody({ className, ...props }: ComponentPropsWithoutRef<"tbody">) {
    return <tbody className={cn("", className)} {...props} />;
}

export function TableRow({ className, ...props }: ComponentPropsWithoutRef<"tr">) {
    return <tr className={cn("hover:bg-muted/50 border-b transition-colors last:border-b-0", className)} {...props} />;
}

export function TableHead({ className, ...props }: ComponentPropsWithoutRef<"th">) {
    return (
        <th
            className={cn("h-12 px-4 text-start align-middle text-sm font-semibold whitespace-nowrap", className)}
            {...props}
        />
    );
}

export function TableCell({ className, ...props }: ComponentPropsWithoutRef<"td">) {
    return <td className={cn("p-4 text-start align-middle text-sm whitespace-nowrap", className)} {...props} />;
}
