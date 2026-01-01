import Link from "next/link";

import { DocumentTextIcon } from "@heroicons/react/24/solid";

import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";

export function HeroSection() {
    return (
        <Section>
            <Container className="sm:space-y-6">
                <div className="mx-auto w-fit">
                    <Badge variant="outline" className="bg-muted">
                        Built with Next.js and Tailwind CSS
                    </Badge>
                </div>
                <Container className="max-w-5xl px-0">
                    <Heading className="lg:leading-snug">
                        Speedtrack Your Next <span className="md:text-8xl">Development.</span>
                    </Heading>
                    <Text size="large" className="text-muted-foreground text-center">
                        Explore a wide range of pre-designed UI components & templates to kickstart your development
                        process. With our ready-to-use solutions by customizing styles and layouts to fit your unique
                        needs.
                    </Text>
                </Container>
                <div className="flex items-center justify-center gap-4">
                    <Button asChild>
                        <Link href="#">
                            <span>Components</span>
                        </Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link href="/docs">
                            <DocumentTextIcon />
                            <span>Documentation</span>
                        </Link>
                    </Button>
                </div>
            </Container>
        </Section>
    );
}
