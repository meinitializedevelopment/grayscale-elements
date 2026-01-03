"use client";

import {
    createContext,
    useCallback,
    useContext,
    useRef,
    useState,
    type ComponentPropsWithoutRef,
    type RefObject,
} from "react";
import { ClipboardDocumentCheckIcon, ClipboardDocumentIcon } from "@heroicons/react/24/solid";

import { cn } from "@/library/utilities";
import { highlighter, Language } from "@/library/syntax-highlighter";

type CodeBlockState = {
    language: Language;
    codeRef: RefObject<HTMLElement | null>;
    onCodeCopy: (code: string) => Promise<void>;
};

const CodeBlockContext = createContext<CodeBlockState | null>(null);

function useCodeBlockContext() {
    const context = useContext(CodeBlockContext);

    if (!context) {
        throw new Error("useCodeBlockContext must be used within a CodeBlockProvider");
    }

    return context;
}

type CodeBlockProps = ComponentPropsWithoutRef<"div"> & { language?: Language };

export function CodeBlock({ className, language = "plaintext", ...props }: CodeBlockProps) {
    const codeRef = useRef<HTMLElement | null>(null);

    const handleOnCodeCopy = useCallback(async (code: string) => {
        try {
            await navigator.clipboard.writeText(code);
        } catch (error) {
            console.error("Failed to copy code to clipboard:", error);
        }
    }, []);

    return (
        <CodeBlockContext.Provider value={{ language, codeRef, onCodeCopy: handleOnCodeCopy }}>
            <div className={cn("w-full overflow-hidden rounded-lg border", className)} {...props} />
        </CodeBlockContext.Provider>
    );
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
    const [isCopied, setIsCopied] = useState(false);

    const { codeRef, onCodeCopy } = useCodeBlockContext();

    const handleOnButtonClick = async () => {
        if (codeRef.current) {
            await onCodeCopy(codeRef.current.innerText);

            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        }
    };

    return (
        <button
            type="button"
            onClick={handleOnButtonClick}
            className={cn(
                "focus-visible:ring-offset-background text-foreground hover:bg-muted focus-visible:ring-secondary inline-flex size-6 shrink-0 cursor-pointer items-center justify-center rounded bg-transparent text-sm font-medium whitespace-nowrap transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4! [&_svg]:shrink-0",
                className
            )}
            {...props}
        >
            {isCopied ? (children ?? <ClipboardDocumentCheckIcon />) : <ClipboardDocumentIcon />}
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

export function CodeBlockCode({ children, className, ...props }: ComponentPropsWithoutRef<"code">) {
    const { language, codeRef } = useCodeBlockContext();

    return (
        <code
            ref={codeRef}
            className={cn("font-mono text-sm leading-relaxed font-medium", className)}
            dangerouslySetInnerHTML={{ __html: highlighter(String(children), language) }}
            {...props}
        />
    );
}
