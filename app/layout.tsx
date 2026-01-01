import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Google_Sans } from "next/font/google";

import "./globals.css";

import { Header } from "@/components/header";
import { cn } from "@/library/utilities";

const googleSans = Google_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    fallback: ["sans-serif"],
    style: ["normal"],
});

export const metadata: Metadata = {
    title: "Grayscale Elements | Components, Blocks, and Templates for your Next.js Projects",
    description:
        "Collection of production-ready UI components, blocks, and templates built using Next.js, Typescript, and Tailwind CSS.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body className={cn(googleSans.className, "antialiased")}>
                <Header />
                {children}
            </body>
        </html>
    );
}
