import type { ReactNode } from "react";
import type { Metadata } from "next";

import { Container } from "@/components/ui/container";
import { DocsSidebar } from "@/components/docs/sidebar";
import { TOCSidebar } from "@/components/docs/toc-sidebar";

export const metadata: Metadata = {
    title: "Documentation | Grayscale Elements",
    description: "Documentation for Grayscale Elements components, blocks, and templates.",
};

export default function DocsLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex items-start">
            <DocsSidebar />
            <main className="w-full">
                <Container className="max-w-2xl">{children}</Container>
            </main>
            <TOCSidebar />
        </div>
    );
}
