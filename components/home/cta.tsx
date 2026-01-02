import Link from "next/link";

import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";

export function CTA() {
    return (
        <Section>
            <Container>
                <div className="bg-primary text-primary-foreground space-y-6 rounded-lg p-12 max-sm:p-6">
                    <div className="mx-auto w-full max-w-3xl space-y-2">
                        <Heading asChild>
                            <h3>Ready to get started?</h3>
                        </Heading>
                        <Text size="large" className="mt-0! text-center">
                            Join thousands of developers using GrayscaleElements to build beautiful, modern, and
                            production ready applications faster than ever.
                        </Text>
                    </div>
                    <div className="flex items-center justify-center gap-2 max-sm:flex-col sm:gap-4">
                        <Button asChild variant="secondary" className="text-primary max-sm:w-full">
                            <Link href="/docs/setup">
                                <span>Start Building for Free</span>
                            </Link>
                        </Button>
                        <Button
                            asChild
                            className="bg-background/5 hover:bg-background/10 text-background max-sm:w-full"
                        >
                            <Link href="#">
                                <span>Explore Templates</span>
                            </Link>
                        </Button>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
