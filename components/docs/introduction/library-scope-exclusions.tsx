import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

import { LIBRARY_SCOPE_EXCLUSIONS } from "@/constants/docs";

export function LibraryScopeExclusions() {
    return (
        <div className="mt-12 sm:mt-24">
            <Heading asChild id="library-scope-exclusions" className="text-start">
                <h2>Library Scope Exclusions</h2>
            </Heading>
            <Text>
                To set clear expectations, it is equally important to understand what GrayscaleElements does not attempt
                to be. The library is intentionally scoped to remain flexible, composable, and easy to maintain over
                time. As such, it does not include the following:
            </Text>
            <ul className="ms-6 mt-6 list-disc space-y-6">
                {LIBRARY_SCOPE_EXCLUSIONS.map((item) => (
                    <li key={item.label}>
                        <Text>
                            <strong>{item.label}:</strong> {item.description}
                        </Text>
                    </li>
                ))}
            </ul>
        </div>
    );
}
