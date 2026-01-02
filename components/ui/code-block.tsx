import { type ComponentPropsWithoutRef } from "react";
import { ClipboardDocumentIcon } from "@heroicons/react/24/solid";

import { cn } from "@/library/utilities";

export function CodeBlock({ className, ...props }: ComponentPropsWithoutRef<"div">) {
    return <div className={cn("w-full overflow-hidden rounded-lg border", className)} {...props} />;
}

export function CodeBlockHeader({ className, ...props }: ComponentPropsWithoutRef<"div">) {
    return (
        <div
            className={cn(
                "bg-muted flex items-center gap-2 border-b p-2 [&_svg]:pointer-events-none [&_svg]:size-6 [&_svg]:shrink-0",
                className
            )}
            {...props}
        />
    );
}

export function CodeBlockTitle({ className, ...props }: ComponentPropsWithoutRef<"p">) {
    return <p className={cn("grow text-xs leading-none font-medium", className)} {...props} />;
}

export function CodeBlockCopy({ children, className, ...props }: ComponentPropsWithoutRef<"button">) {
    return (
        <button
            className={cn(
                "focus-visible:ring-offset-background text-foreground hover:bg-muted focus-visible:ring-secondary inline-flex size-6 shrink-0 cursor-pointer items-center justify-center rounded bg-transparent text-sm font-medium whitespace-nowrap transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4! [&_svg]:shrink-0",
                className
            )}
            {...props}
        >
            {children ?? <ClipboardDocumentIcon />}
            <span className="sr-only">Copy Code to Clipboard</span>
        </button>
    );
}

export function CodeBlockContent({ className, ...props }: ComponentPropsWithoutRef<"pre">) {
    return (
        <div className="bg-muted/50 w-full overflow-hidden p-4">
            <pre className={cn("overflow-x-auto whitespace-pre", className)} {...props} />
        </div>
    );
}

export function CodeBlockCode({ className, ...props }: ComponentPropsWithoutRef<"code">) {
    return <code className={cn("block font-mono text-sm leading-relaxed", className)} {...props} />;
}
