import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

import { DESIGN_PHILOSOPHIES } from "@/constants/docs";

export function DesignPhilosophy() {
    return (
        <div className="mt-12 sm:mt-24">
            <Heading asChild id="design-philosophy" className="text-start">
                <h2>Design Philosophy</h2>
            </Heading>
            <Text>
                GrayscaleElements is guided by a small set of intentional principles that prioritize clarity,
                composability, and long-term maintainability over abstraction-heavy convenience. The following design
                philosophies shape the library&apos;s approach to component design, API structure, and overall developer
                experience.
            </Text>
            {DESIGN_PHILOSOPHIES.map((item) => (
                <div key={item.label} className="mt-12">
                    <Heading asChild className="text-start">
                        <h3>{item.label}</h3>
                    </Heading>
                    <Text className="mt-2!">{item.description}</Text>
                </div>
            ))}
        </div>
    );
}
