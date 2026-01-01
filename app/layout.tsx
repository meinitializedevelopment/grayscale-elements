import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Google_Sans } from "next/font/google";

import "./globals.css";

import { cn } from "@/library/utilities";

const googleSans = Google_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    fallback: ["sans-serif"],
    style: ["normal"],
});

export const metadata: Metadata = {
    title: "",
    description: "",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body className={cn(googleSans.className, "antialiased")}>{children}</body>
        </html>
    );
}
