import type { Metadata } from "next";

import Link from "next/link";

import { type VariantProps } from "class-variance-authority";
import { ArrowLongLeftIcon, ArrowLongRightIcon, DocumentTextIcon } from "@heroicons/react/24/solid";

import { badge, Badge } from "@/components/ui/badge";
import { Blockquote } from "@/components/ui/blockquote";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Code } from "@/components/ui/code";
import {
    CodeBlock,
    CodeBlockCode,
    CodeBlockContent,
    CodeBlockCopy,
    CodeBlockHeader,
    CodeBlockTitle,
} from "@/components/ui/code-block";
import { Heading } from "@/components/ui/heading";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Text } from "@/components/ui/text";

import {
    ACCESSIBILITY_CONSIDERATIONS_FOR_BADGE,
    BADGE_AS_CHILD_USAGE_CODE,
    BADGE_COMPONENT_API_TABLE,
    BADGE_COMPONENT_CODE,
    BADGE_DESIGN_GOALS,
    BADGE_PREVIEW,
    BADGE_VARIANTS,
    HOW_BADGE_WORKS,
    SLOT_UTILITY_CODE,
    WHEN_TO_USE_BADGE_UTILITY,
} from "@/constants/docs";

export const metadata: Metadata = {
    title: "Badge | Grayscale Elements",
    description:
        "The Badge component is a small, non-interactive UI primitive for displaying status, metadata, or contextual labels using explicit styling and compositional patterns.",
};

export default function BadgePage() {
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
                        <BreadcrumbLink asChild>
                            <Link href="#">Components</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Badge</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <Heading className="mt-6 text-start sm:mt-12">Badge</Heading>
            <Text size="large" className="text-muted-foreground">
                The Badge component is a compact, presentational UI primitive used to display short pieces of contextual
                information such as status, category labels, counts, or metadata.
            </Text>
            <Text className="mb-6 font-medium">
                Badge is intentionally simple. It does not handle state, behavior, or interaction logic. Its sole
                responsibility is to provide a consistent visual container for small, inline labels while remaining
                fully composable and owned by your application.
            </Text>
            <CodeBlock language="typescript">
                <CodeBlockHeader>
                    <DocumentTextIcon />
                    <CodeBlockTitle>badge-example.tsx</CodeBlockTitle>
                    <CodeBlockCopy />
                </CodeBlockHeader>
                <CodeBlockHeader className="justify-center gap-4 p-20">
                    <Badge>Badge Component</Badge>
                </CodeBlockHeader>
                <CodeBlockContent>
                    <CodeBlockCode>{BADGE_PREVIEW}</CodeBlockCode>
                </CodeBlockContent>
            </CodeBlock>
            <Heading asChild id="design-goals" className="mt-12 text-start sm:mt-24">
                <h2>Design Goals</h2>
            </Heading>
            <Text>Badge is designed with the following goals:</Text>
            <ul className="ms-6 mt-6 mb-12 list-disc space-y-4">
                {BADGE_DESIGN_GOALS.map((item) => (
                    <li key={item.label}>
                        <Text>
                            <strong>{item.label}:</strong> {item.description}
                        </Text>
                    </li>
                ))}
            </ul>
            <Text>Badge avoids becoming an overloaded abstraction. It does one thing well and nothing more.</Text>
            <Heading asChild id="dependency-slot" className="mt-12 text-start sm:mt-24">
                <h2>Dependency: Slot</h2>
            </Heading>
            <Text>
                Badge supports compositional rendering via the Slot utility. Slot allows Badge to forward its props and
                styles to a child element instead of always rendering a fixed <Code>{"<span>"}</Code>. This is useful
                when a badge needs to integrate with existing markup or custom components without duplicating styles.
            </Text>
            <Text>
                If you have not already added Slot, start by creating the following file:{" "}
                <Code>/components/utilities/slot.tsx</Code>
            </Text>
            <Text className="mb-6">
                Paste the Slot implementation below into this file. If you have already added Slot, you can skip this
                step and move on to adding Button.
            </Text>
            <CodeBlock language="typescript">
                <CodeBlockHeader>
                    <DocumentTextIcon />
                    <CodeBlockTitle>slot.tsx</CodeBlockTitle>
                    <CodeBlockCopy />
                </CodeBlockHeader>
                <CodeBlockContent>
                    <CodeBlockCode>{SLOT_UTILITY_CODE}</CodeBlockCode>
                </CodeBlockContent>
            </CodeBlock>
            <Heading asChild id="installation" className="mt-12 text-start sm:mt-24">
                <h2>Installation</h2>
            </Heading>
            <Text>
                Badge is copied directly into your project. There is no package to install. Create the following file:{" "}
                <Code>/components/ui/badge.tsx</Code>
            </Text>
            <Text className="mb-6">Paste the Badge implementation into this file.</Text>
            <CodeBlock language="typescript">
                <CodeBlockHeader>
                    <DocumentTextIcon />
                    <CodeBlockTitle>badge.tsx</CodeBlockTitle>
                    <CodeBlockCopy />
                </CodeBlockHeader>
                <CodeBlockContent>
                    <CodeBlockCode>{BADGE_COMPONENT_CODE}</CodeBlockCode>
                </CodeBlockContent>
            </CodeBlock>
            <Blockquote className="mt-6">
                Badge is built using Tailwind CSS and <Code>class-variance-authority</Code>. Both are required for the
                component to function as documented.
            </Blockquote>
            <Heading asChild id="how-badge-works" className="mt-12 text-start sm:mt-24">
                <h2>How Badge Works</h2>
            </Heading>
            <Text>Badge is implemented as a thin wrapper around a styled inline element. It uses:</Text>
            <ul className="ms-6 mt-6 mb-12 list-disc space-y-4">
                {HOW_BADGE_WORKS.map((item) => (
                    <li key={item}>
                        <Text>{item}</Text>
                    </li>
                ))}
            </ul>
            <Text>
                Badge does not manage state, events, or interactions. It simply resolves classes based on the selected
                variant and applies them to the rendered element.
            </Text>
            <Heading asChild id="variants" className="mt-12 text-start sm:mt-24">
                <h2>Variants</h2>
            </Heading>
            <Text>
                Badge exposes a small set of visual variants. These variants communicate context or intent without
                introducing interaction or behavior.
            </Text>
            {BADGE_VARIANTS.map((item) => (
                <div key={item.label}>
                    <Heading
                        asChild
                        id={item.label.replace(/\s+/g, "-").toLowerCase()}
                        className="mt-6 text-start sm:mt-12"
                    >
                        <h3>{item.label}</h3>
                    </Heading>
                    <Text className="mb-6">{item.description}</Text>
                    <CodeBlock language="typescript">
                        <CodeBlockHeader>
                            <DocumentTextIcon />
                            <CodeBlockTitle>{item.label.toLowerCase().concat("-badge.tsx")}</CodeBlockTitle>
                            <CodeBlockCopy />
                        </CodeBlockHeader>
                        <CodeBlockHeader className="justify-center gap-4 p-20">
                            <Badge variant={item.variant as VariantProps<typeof badge>["variant"]}>{item.label}</Badge>
                        </CodeBlockHeader>
                        <CodeBlockContent>
                            <CodeBlockCode>{item.code}</CodeBlockCode>
                        </CodeBlockContent>
                    </CodeBlock>
                </div>
            ))}
            <Heading asChild id="as-child" className="mt-6 text-start sm:mt-12">
                <h3>As Child</h3>
            </Heading>
            <Text>
                Badge supports compositional rendering through the <Code>asChild</Code> prop. When enabled, Badge
                forwards its styles and behavior to the child element instead of rendering a <Code>{"<span>"}</Code>.
            </Text>
            <Text className="mb-6">
                This can be useful when: Integrating a badge into custom components, Adapting to existing semantic
                markup, or Avoiding unnecessary wrapper elements. As with other compositional patterns in
                GrayscaleElements, responsibility for semantics remains explicit.
            </Text>
            <CodeBlock language="typescript">
                <CodeBlockHeader>
                    <DocumentTextIcon />
                    <CodeBlockTitle>badge-as-child.tsx</CodeBlockTitle>
                    <CodeBlockCopy />
                </CodeBlockHeader>
                <CodeBlockContent>
                    <CodeBlockCode>{BADGE_AS_CHILD_USAGE_CODE}</CodeBlockCode>
                </CodeBlockContent>
            </CodeBlock>
            <Heading asChild id="using-the-badge-utility" className="mt-12 text-start sm:mt-24">
                <h2>Using the Badge Utility</h2>
            </Heading>
            <Text>
                In addition to the <Code>Badge</Code> component, GrayscaleElements exposes a <Code>badge</Code> utility
                generated using <Code>class-variance-authority</Code>. This utility allows you to apply badge styles
                without using the Badge component itself. It is useful when:
            </Text>
            <ul className="ms-6 mt-6 mb-12 list-disc space-y-4">
                {WHEN_TO_USE_BADGE_UTILITY.map((item) => (
                    <li key={item}>
                        <Text>{item}</Text>
                    </li>
                ))}
            </ul>
            <Text>
                The badge utility returns a string of Tailwind CSS classes based on the selected variant. You can use it
                directly like this: <Code>{`badge({ variant: "primary" })`}</Code>
            </Text>
            <Text>
                The returned className can be applied to any element. This pattern keeps styling reusable while avoiding
                unnecessary wrappers.
            </Text>
            <Heading asChild id="accessibility-considerations" className="mt-12 text-start sm:mt-24">
                <h2>Accessibility Considerations</h2>
            </Heading>
            <Text>
                Badge is a non-interactive, presentational component by default. When rendered as a{" "}
                <Code>{"<span>"}</Code>, it carries no semantic meaning beyond its content. This is intentional. When
                using Badge:
            </Text>
            <ul className="ms-6 mt-6 mb-12 list-disc space-y-4">
                {ACCESSIBILITY_CONSIDERATIONS_FOR_BADGE.map((item) => (
                    <li key={item}>
                        <Text>{item}</Text>
                    </li>
                ))}
            </ul>
            <Text>
                When rendering Badge with <Code>asChild</Code>, ensure that the rendered element remains semantically
                appropriate for its role. Badge does not infer roles or accessibility attributes. Explicit
                responsibility is preserved by design.
            </Text>
            <Heading asChild id="api" className="mt-12 text-start sm:mt-24">
                <h2>API</h2>
            </Heading>
            <Text className="mb-6">
                The Badge API is intentionally minimal. It exposes a small set of props to control its appearance and
                rendering behavior.
            </Text>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Prop Name</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Default Value</TableHead>
                        <TableHead>Description</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {BADGE_COMPONENT_API_TABLE.map((item) => (
                        <TableRow key={item.name}>
                            <TableCell>
                                <Code>{item.name}</Code>
                            </TableCell>
                            <TableCell>{item.type}</TableCell>
                            <TableCell>
                                <Code>{item.default}</Code>
                            </TableCell>
                            <TableCell>{item.description}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Heading asChild id="summary" className="mt-12 text-start sm:mt-24">
                <h2>Summary</h2>
            </Heading>
            <Text>
                Badge is a small, focused UI primitive for displaying contextual labels. It provides: Clear visual
                variants, Minimal surface area, and Optional compositional rendering
            </Text>
            <Text>
                Badge does not attempt to be interactive or stateful. It exists to support clarity, consistency, and
                explicit structure across your interface. As with all GrayscaleElements components, Badge is meant to be
                copied, understood, and adapted to fit your application&apos;s needs.
            </Text>
            <div className="mt-24 flex items-center justify-between">
                <Button asChild variant="ghost">
                    <Link href="#">
                        <ArrowLongLeftIcon />
                        <span>Components</span>
                    </Link>
                </Button>
                <Button asChild variant="ghost">
                    <Link href="/docs/components/button">
                        <span>Button</span>
                        <ArrowLongRightIcon />
                    </Link>
                </Button>
            </div>
        </>
    );
}
