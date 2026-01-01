import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { GUIDE } from "@/constants/guide";

export function Guide() {
    return (
        <Section>
            <Container className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {GUIDE.map((item) => (
                    <Card key={item.label} className="bg-muted">
                        <div className="p-6 pb-0">
                            <item.icon className="pointer-events-none size-6 shrink-0" />
                        </div>
                        <CardHeader>
                            <CardTitle>{item.label}</CardTitle>
                            <CardDescription className="text-foreground/80">{item.description}</CardDescription>
                        </CardHeader>
                    </Card>
                ))}
            </Container>
        </Section>
    );
}
