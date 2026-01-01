import Link from "next/link";

import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";

import { FEATURES } from "@/constants/features";

export function Features() {
    return (
        <Section>
            <Container className="grid gap-12 lg:grid-cols-2">
                <div className="space-y-12">
                    <div>
                        <Heading asChild className="text-start">
                            <h2>
                                Focus on Building Your App,
                                <br />
                                Let Us Handle the UI.
                            </h2>
                        </Heading>
                        <Text size="large" className="text-muted-foreground">
                            Our pre-built UI components are designed to seamlessly integrate into your projects, saving
                            you time and effort. With GrayscaleElements, you can focus on what matters most - building
                            amazing applications.
                        </Text>
                    </div>
                    <Button asChild className="w-fit">
                        <Link href="#">
                            <span>Get Started Now</span>
                            <ArrowLongRightIcon />
                        </Link>
                    </Button>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 sm:gap-12">
                    {FEATURES.map((item) => (
                        <FeatureCard key={item.label} item={item} />
                    ))}
                </div>
            </Container>
        </Section>
    );
}

function FeatureCard({ item }: { item: (typeof FEATURES)[number] }) {
    return (
        <div className="mt-2 space-y-6">
            <div className="bg-muted inline-flex size-10 items-center justify-center rounded">
                <item.icon className="pointer-events-none size-4 shrink-0" />
            </div>
            <div className="space-y-1">
                <Text size="large" className="leading-tight font-semibold">
                    {item.label}
                </Text>
                <Text className="text-muted-foreground mt-0!">{item.description}</Text>
            </div>
        </div>
    );
}
