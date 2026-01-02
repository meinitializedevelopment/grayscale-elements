import Link from "next/link";

import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

import {
    DESIGN_PHILOSOPHIES,
    ELEMENT_RELATIONSHIP,
    LIBRARY_SCOPE_EXCLUSIONS,
    LICENSE_AND_USAGE,
} from "@/constants/docs";

export default function DocsPage() {
    return (
        <>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href="/docs">Documentation</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Introduction</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <Heading id="introduction" className="mt-6 text-start sm:mt-12">
                Introduction
            </Heading>
            <Text size="large" className="text-muted-foreground">
                GrayscaleElements is a collection of reusable, production-ready UI components and UI blocks designed for
                Next.js applications. The library focuses on clean composition, copy-paste-friendly code, and full
                developer control, without relying on external UI libraries or complex abstractions.
            </Text>
            <Text className="font-medium">
                All components are built with React, TypeScript, and Tailwind CSS, and are intended to be used directly
                in your application codebase, where you own, customize, and extend them as needed.
            </Text>
            <Heading asChild id="design-philosophy" className="mt-12 text-start sm:mt-24">
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
            <Heading asChild id="how-everything-fits-together" className="mt-12 text-start sm:mt-24">
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
            <Heading asChild id="library-scope-exclusions" className="mt-12 text-start sm:mt-24">
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
            <Heading asChild id="license-and-usage" className="mt-12 text-start sm:mt-24">
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
            <div className="mt-24 flex items-center justify-end">
                <Button asChild variant="ghost">
                    <Link href="/docs/setup">
                        <span>Setup & Installation</span>
                        <ArrowLongRightIcon />
                    </Link>
                </Button>
            </div>
        </>
    );
}
