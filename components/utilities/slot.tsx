import { cloneElement, isValidElement, type HTMLAttributes } from "react";

import { cn } from "@/library/utilities";

function handleMergeProps(...props: Array<Record<string, unknown>>) {
    const combinedProps = {} as Record<string, unknown>;

    for (const prop of props) {
        for (const key in prop) {
            const previous = combinedProps[key];
            const next = prop[key];

            if (key === "className") {
                combinedProps[key] = cn(previous as string, next as string);
            } else if (key === "style") {
                combinedProps[key] = { ...(previous as object), ...(next as object) };
            } else if (/^on[A-Z]/.test(key) && typeof previous === "function" && typeof next === "function") {
                combinedProps[key] = (...args: Array<unknown>) => {
                    previous(...args);
                    next(...args);
                };
            } else {
                combinedProps[key] = next ?? previous;
            }
        }
    }

    return combinedProps;
}

export function Slot({ children, ...props }: HTMLAttributes<HTMLElement>) {
    if (!isValidElement(children)) {
        throw new Error("Slot children must be a valid react element");
    }

    return cloneElement(children, handleMergeProps(children.props as Record<string, unknown>, props));
}
