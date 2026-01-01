import { Heading } from "@/components/ui/heading";
import { Link } from "@/components/ui/link";
import { Text } from "@/components/ui/text";

import { LICENSE_AND_USAGE } from "@/constants/docs";

export function LicenseAndUsage() {
    return (
        <div className="mt-12 sm:mt-24">
            <Heading asChild id="license-and-usage" className="text-start">
                <h2>License and Usage</h2>
            </Heading>
            <Text>
                GrayscaleElements is not an open-source project but is free to use in both personal and commercial
                projects without any licensing fees or restrictions. However, it cannot be resold or redistributed as a
                paid product. The ownership of GrayscaleElements remains with the original author{" "}
                <Link
                    href="https://github.com/meinitializedevelopment/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs underline"
                >
                    (Nikhil Kumar Singh)
                </Link>
                .
            </Text>
            <ul className="ms-6 mt-6 list-disc space-y-2">
                {LICENSE_AND_USAGE.map((item) => (
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
