import type { Metadata } from "next";

import { HeroSection } from "@/components/home/hero-section";
import { Guide } from "@/components/home/guide";
import { Features } from "@/components/home/features";
import { CTA } from "@/components/home/cta";

export const metadata: Metadata = {
    title: "Grayscale Elements | Components, Blocks, and Templates for your Next.js Projects",
    description:
        "Welcome to Grayscale Elements, your source for production-ready UI components, blocks, and templates built with Next.js, Typescript, and Tailwind CSS.",
};

export default function HomePage() {
    return (
        <main>
            <HeroSection />
            <Guide />
            <Features />
            <CTA />
        </main>
    );
}
