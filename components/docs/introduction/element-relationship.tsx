import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

import { ELEMENT_RELATIONSHIP } from "@/constants/docs";

export function ElementRelationship() {
    return (
        <div className="mt-12 sm:mt-24">
            <Heading asChild id="how-everything-fits-together" className="text-start">
                <h2>How Everything Fits Together</h2>
            </Heading>
            <Text>
                GrayscaleElements is organized around a small set of concepts that build on top of one another.
                Understanding how these pieces relate makes it easier to know where to start and how to use the library
                effectively in your projects.
            </Text>
            {ELEMENT_RELATIONSHIP.map((item) => (
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
