import type { Metadata } from "next";

import Link from "next/link";

import { type VariantProps } from "class-variance-authority";
import { ArrowLongLeftIcon, ArrowLongRightIcon, DocumentTextIcon } from "@heroicons/react/24/solid";

import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
    CodeBlock,
    CodeBlockCode,
    CodeBlockContent,
    CodeBlockCopy,
    CodeBlockHeader,
    CodeBlockTitle,
} from "@/components/ui/code-block";
import { button, Button } from "@/components/ui/button";
import { Code } from "@/components/ui/code";
import { Blockquote } from "@/components/ui/blockquote";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import { cn } from "@/library/utilities";
import {
    ACCESSIBILITY_CONSIDERATIONS_FOR_BUTTON,
    BUTTON_AS_CHILD_USAGE_CODE,
    BUTTON_COMPONENT_API_TABLE,
    BUTTON_COMPONENT_CODE,
    BUTTON_DESIGN_GOALS,
    BUTTON_PREVIEW,
    BUTTON_VARIANTS_AND_SIZES,
    HOW_BUTTON_WORKS,
    SLOT_UTILITY_CODE,
} from "@/constants/docs";

export const metadata: Metadata = {
    title: "Button | Grayscale Elements",
    description:
        "The Button component is a composable, accessible primitive built on explicit styling and Slot-based composition.",
};

export default function ButtonPage() {
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
                        <BreadcrumbPage>Button</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <Heading className="mt-6 text-start sm:mt-12">Button</Heading>
            <Text size="large" className="text-muted-foreground">
                The Button component is a foundational UI primitive in GrayscaleElements. It provides a small, explicit
                abstraction over native buttons while remaining fully composable, styleable, and owned by your
                application.
            </Text>
            <Text className="mb-6 font-medium">
                Button does not introduce framework-specific behavior, hidden state, or design-system constraints. It is
                built using plain React, Tailwind CSS, and a small number of focused utilities to solve real problems
                without adding complexity.
            </Text>
            <CodeBlock language="typescript">
                <CodeBlockHeader>
                    <DocumentTextIcon />
                    <CodeBlockTitle>button-example.tsx</CodeBlockTitle>
                    <CodeBlockCopy />
                </CodeBlockHeader>
                <CodeBlockHeader className="justify-center gap-4 p-20">
                    <Button>
                        <span>Button Component</span>
                    </Button>
                </CodeBlockHeader>
                <CodeBlockContent>
                    <CodeBlockCode>{BUTTON_PREVIEW}</CodeBlockCode>
                </CodeBlockContent>
            </CodeBlock>
            <Heading asChild id="design-goals" className="mt-12 text-start sm:mt-24">
                <h2>Design Goals</h2>
            </Heading>
            <Text>The Button component is designed with the following goals in mind:</Text>
            <ul className="ms-6 mt-6 mb-12 list-disc space-y-4">
                {BUTTON_DESIGN_GOALS.map((item) => (
                    <li key={item.label}>
                        <Text>
                            <strong>{item.label}:</strong> {item.description}
                        </Text>
                    </li>
                ))}
            </ul>
            <Text>
                Button is intentionally small. It solves one problem well: providing a flexible, accessible interactive
                element with consistent styling.
            </Text>
            <Heading asChild id="dependency-slot" className="mt-12 text-start sm:mt-24">
                <h2>Dependency: Slot</h2>
            </Heading>
            <Text>Before adding the Button component, you must add the Slot utility.</Text>
            <Text>
                Slot enables Button to forward its props, styles, and behavior to a child element instead of always
                rendering a <Code>{"<button>"}</Code>. This makes patterns like rendering a button as a link possible
                without duplicating styles or logic.
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
                The Button component is copied directly into your project. There is no package to install. Create the
                following file: <Code>/components/ui/button.tsx</Code>
            </Text>
            <Text className="mb-6">Paste the Button implementation into this file.</Text>
            <CodeBlock language="typescript">
                <CodeBlockHeader>
                    <DocumentTextIcon />
                    <CodeBlockTitle>button.tsx</CodeBlockTitle>
                    <CodeBlockCopy />
                </CodeBlockHeader>
                <CodeBlockContent>
                    <CodeBlockCode>{BUTTON_COMPONENT_CODE}</CodeBlockCode>
                </CodeBlockContent>
            </CodeBlock>
            <Blockquote className="mt-6">
                Button is built on top of Tailwind CSS and <Code>class-variance-authority</Code>. Both are required for
                the component to function as documented.
            </Blockquote>
            <Heading asChild id="how-button-works" className="mt-12 text-start sm:mt-24">
                <h2>How Button Works</h2>
            </Heading>
            <Text>Button uses a small number of well-defined building blocks:</Text>
            <ul className="ms-6 mt-6 mb-12 list-disc space-y-4">
                {HOW_BUTTON_WORKS.map((item) => (
                    <li key={item}>
                        <Text>{item}</Text>
                    </li>
                ))}
            </ul>
            <Text>
                Styling variants are declared once and resolved at render time. The Button component itself remains a
                thin wrapper that selects which element to render and which styles to apply.
            </Text>
            <Text>There is no internal state, side effects, or lifecycle behavior.</Text>
            <Heading asChild id="variants-and-sizes" className="mt-12 text-start sm:mt-24">
                <h2>Variants and Sizes</h2>
            </Heading>
            <Text>
                Button exposes a controlled set of variants and sizes. These options are intentionally limited to keep
                the component predictable and easy to reason about.
            </Text>
            <Text>Variants communicate visual intent, while sizes control physical dimensions.</Text>
            {BUTTON_VARIANTS_AND_SIZES.map((item) => (
                <div key={item.label}>
                    <Heading asChild id={item.label.toLowerCase()} className="mt-6 text-start sm:mt-12">
                        <h3>{item.label}</h3>
                    </Heading>
                    <Text className="mb-6">{item.description}</Text>
                    <CodeBlock language="typescript">
                        <CodeBlockHeader>
                            <DocumentTextIcon />
                            <CodeBlockTitle>{item.label.toLowerCase().concat("-button.tsx")}</CodeBlockTitle>
                            <CodeBlockCopy />
                        </CodeBlockHeader>
                        <CodeBlockHeader className="justify-center gap-4 p-20">
                            <Button
                                variant={item.variant as VariantProps<typeof button>["variant"]}
                                size={item.size as VariantProps<typeof button>["size"]}
                            >
                                {item.icon && <item.icon />}
                                <span className={cn(item.srOnly && "sr-only")}>{item.text}</span>
                            </Button>
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
                Button supports compositional rendering through the <Code>asChild</Code> prop. When enabled, Button
                forwards its styles and behavior to the child element instead of rendering a native{" "}
                <Code>{"<button>"}</Code>.
            </Text>
            <Text className="mb-6">
                This enables rendering a button as a link or custom component without duplicating styles.
            </Text>
            <CodeBlock language="typescript">
                <CodeBlockHeader>
                    <DocumentTextIcon />
                    <CodeBlockTitle>button-as-link.tsx</CodeBlockTitle>
                    <CodeBlockCopy />
                </CodeBlockHeader>
                <CodeBlockContent>
                    <CodeBlockCode>{BUTTON_AS_CHILD_USAGE_CODE}</CodeBlockCode>
                </CodeBlockContent>
            </CodeBlock>
            <Heading asChild id="accessibility-considerations" className="mt-12 text-start sm:mt-24">
                <h2>Accessibility Considerations</h2>
            </Heading>
            <Text>
                Button inherits accessibility behavior from the element it renders. When rendered as a native{" "}
                <Code>{"<button>"}</Code>, it includes built-in keyboard interaction, focus management, and semantics.
            </Text>
            <Text>
                When using <Code>asChild</Code>, accessibility becomes the responsibility of the rendered element.
                Ensure that:
            </Text>
            <ul className="ms-6 mt-6 mb-12 list-disc space-y-4">
                {ACCESSIBILITY_CONSIDERATIONS_FOR_BUTTON.map((item) => (
                    <li key={item}>
                        <Text>{item}</Text>
                    </li>
                ))}
            </ul>
            <Text>
                Button does not attempt to infer or correct accessibility behavior. Responsibility is explicit by
                design.
            </Text>
            <Heading asChild id="api" className="mt-12 text-start sm:mt-24">
                <h2>API</h2>
            </Heading>
            <Text className="mb-6">
                The Button API is intentionally small and explicit. Button forwards all valid native button props,
                including <Code>type</Code>, <Code>disabled</Code>, <Code>onClick</Code>, and <Code>aria-*</Code>{" "}
                attributes.
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
                    {BUTTON_COMPONENT_API_TABLE.map((item) => (
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
                Button is a composable, predictable UI primitive designed to balance flexibility and clarity. It
                provides: Explicit styling via variants and sizes, Flexible rendering through Slot-based composition,
                Accessibility best practices without hidden behavior.
            </Text>
            <Text>
                Button is not a framework abstraction. It is a starting point—meant to be copied, owned, and adapted to
                fit your application&apos;s needs.
            </Text>
            <div className="mt-24 flex items-center justify-between">
                <Button asChild variant="ghost">
                    <Link href="#">
                        <ArrowLongLeftIcon />
                        <span>Components</span>
                    </Link>
                </Button>
                <Button asChild variant="ghost">
                    <Link href="/docs/components/slot">
                        <span>Slot</span>
                        <ArrowLongRightIcon />
                    </Link>
                </Button>
            </div>
        </>
    );
}
