import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function Header() {
    return (
        <header className="bg-background sticky top-0 z-50 flex items-center justify-between p-6">
            <Link href="/" className="inline-flex items-center gap-2">
                <Image
                    src="/images/brand-logo--dark.png"
                    alt="Grayscale Elements Logo"
                    width={32}
                    height={32}
                    priority
                    className="object-contain"
                />
                <span className="text-base font-bold max-sm:hidden">GrayscaleElements.</span>
            </Link>
            <div className="inline-flex items-center gap-2">
                <Button asChild variant="ghost" size="icon">
                    <a
                        href="https://github.com/meinitializedevelopment/grayscale-elements/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image src="/images/github-logo--dark.png" alt="GitHub Logo" width={16} height={16} />
                        <span className="sr-only">GitHub</span>
                    </a>
                </Button>
                <Separator orientation="vertical" className="me-2 h-4" />
                <Button asChild size="small">
                    <a href="https://github.com/meinitializedevelopment/" target="_blank" rel="noopener noreferrer">
                        <span>Meet Developer</span>
                    </a>
                </Button>
            </div>
        </header>
    );
}
