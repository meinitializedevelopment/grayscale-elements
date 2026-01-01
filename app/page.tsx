import type { Metadata } from "next";

import { HeroSection } from "@/components/home/hero-section";

export const metadata: Metadata = {
    title: "Grayscale Elements | Components, Blocks, and Templates for your Next.js Projects",
    description:
        "Welcome to Grayscale Elements, your source for production-ready UI components, blocks, and templates built with Next.js, Typescript, and Tailwind CSS.",
};

export default function HomePage() {
    return (
        <main>
            <HeroSection />
        </main>
    );
}
