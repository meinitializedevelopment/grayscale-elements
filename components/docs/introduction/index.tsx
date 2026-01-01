import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

export function Introduction() {
    return (
        <div className="mt-6 sm:mt-12">
            <Heading id="introduction" className="text-start">
                Introduction
            </Heading>
            <Text size="large" className="text-muted-foreground">
                GrayscaleElements is a collection of reusable, production-ready UI components and UI blocks designed for
                Next.js applications. The library focuses on clean composition, copy-paste-friendly code, and full
                developer control, without relying on external UI libraries or complex abstractions.
            </Text>
            <Text className="font-medium">
                All components are built with React, TypeScript, and Tailwind CSS, and are intended to be used directly
                in your application codebase, where you own, customize, and extend them as needed.
            </Text>
        </div>
    );
}
