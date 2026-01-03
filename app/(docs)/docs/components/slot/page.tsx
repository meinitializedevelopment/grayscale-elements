import type { Metadata } from "next";

import Link from "next/link";

import { DocumentTextIcon } from "@heroicons/react/24/solid";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Code } from "@/components/ui/code";
import {
    CodeBlock,
    CodeBlockCode,
    CodeBlockContent,
    CodeBlockCopy,
    CodeBlockHeader,
    CodeBlockTitle,
} from "@/components/ui/code-block";
import { Button } from "@/components/ui/button";
import { Blockquote } from "@/components/ui/blockquote";

import {
    ACCESSIBILITY_CONSIDERATIONS_FOR_SLOT,
    DESIGN_PRINCIPLES_OF_SLOT,
    DRAWBACKS_OF_NOT_USING_SLOT,
    SLOT_BUTTON_USAGE_CODE,
    SLOT_CHARACTERISTICS,
    SLOT_COMMON_MISTAKES,
    SLOT_USAGE_BEST_PRACTICES,
    SLOT_USAGE_SCENARIOS,
    SLOT_UTILITY_CODE,
} from "@/constants/docs";

export const metadata: Metadata = {
    title: "Slot | Grayscale Elements",
    description:
        "The Slot utility enables explicit component composition by forwarding props to a child element without introducing additional markup or behavior.",
};

export default function SlotPage() {
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
                        <BreadcrumbPage>Slot</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <Heading className="mt-6 text-start sm:mt-12">Slot</Heading>
            <Text size="large" className="text-muted-foreground">
                The Slot utility is a small but powerful composition primitive used throughout GrayscaleElements. It
                enables components to pass props, refs, and behaviors down to a child element instead of rendering a
                fixed HTML tag.
            </Text>
            <Text className="font-medium">
                Slot is not a UI component. It does not introduce styles, markup, or behavior of its own. Instead, it
                exists purely to support explicit composition while keeping component APIs simple and predictable.
            </Text>
            <Heading asChild id="why-slot-exists" className="mt-12 text-start sm:mt-24">
                <h2>Why Slot Exists</h2>
            </Heading>
            <Text>
                In real-world applications, components often need to be rendered as different elements depending on
                context. A button might need to render as a <Code>{"<button>"}</Code>, an <Code>{"<a>"}</Code>, or a
                custom link component—without duplicating styles or logic.
            </Text>
            <Text>Without Slot, this usually leads to:</Text>
            <ul className="ms-6 mt-6 mb-12 list-disc space-y-4">
                {DRAWBACKS_OF_NOT_USING_SLOT.map((item) => (
                    <li key={item}>
                        <Text>{item}</Text>
                    </li>
                ))}
            </ul>
            <Heading asChild id="design-principles-of-slot" className="mt-12 text-start sm:mt-24">
                <h2>Design Principles of Slot</h2>
            </Heading>
            <Text>Slot follows the same guiding principles as the rest of GrayscaleElements:</Text>
            <ul className="ms-6 mt-6 mb-12 list-disc space-y-4">
                {DESIGN_PRINCIPLES_OF_SLOT.map((item) => (
                    <li key={item.label}>
                        <Text>
                            <strong>{item.label}:</strong> {item.description}
                        </Text>
                    </li>
                ))}
            </ul>
            <Heading asChild id="installation" className="mt-12 text-start sm:mt-24">
                <h2>Installation</h2>
            </Heading>
            <Text>
                Slot is copied directly into your project as a utility. There is no package to install. Create the
                following file: <Code>/components/utilities/slot.tsx</Code>
            </Text>
            <Text className="mb-6">
                Paste the Slot implementation below into this file. Once added, Slot can be reused across all components
                that require flexible rendering capabilities. And because Slot has no dependencies, it adds no
                additional bundle size.
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
            <Blockquote className="mt-6">
                The code is intentionally small, explicit, and framework-agnostic. You are encouraged to read it and
                understand how it works before using it.
            </Blockquote>
            <Heading asChild id="how-slot-works" className="mt-12 text-start sm:mt-24">
                <h2>How Slot Works</h2>
            </Heading>
            <Text>
                Slot uses <Code>React.cloneElement</Code> to merge props onto its direct child. This allows a parent
                component to control styling, refs, and behavior, while letting the consumer decide what element is
                actually rendered.
            </Text>
            <ul className="ms-6 mt-6 mb-12 list-disc space-y-4">
                {SLOT_CHARACTERISTICS.map((item) => (
                    <li key={item}>
                        <Text>{item}</Text>
                    </li>
                ))}
            </ul>
            <Text>
                If Slot receives invalid children (multiple children, text nodes, etc.), it fails fast—making misuse
                obvious during development.
            </Text>
            <Heading asChild id="basic-usage" className="mt-12 text-start sm:mt-24">
                <h2>Basic Usage</h2>
            </Heading>
            <Text>
                Slot is usually not consumed directly. Instead, it is used internally by other components. A common
                example is a Button that supports rendering as a link:
            </Text>
            <ul className="ms-6 mt-6 mb-12 list-disc space-y-4">
                <li>
                    <Text>
                        When <Code>asChild</Code> is false, the Button renders a <Code>{`<button>`}</Code> element.
                    </Text>
                </li>
                <li>
                    <Text>
                        When <Code>asChild</Code> is true, the Button uses Slot and forwards props to its child.
                    </Text>
                </li>
            </ul>
            <Text>This allows usage like:</Text>
            <ul className="ms-6 mt-6 mb-12 list-disc space-y-4">
                {SLOT_USAGE_SCENARIOS.map((item) => (
                    <li key={item}>
                        <Text>{item}</Text>
                    </li>
                ))}
            </ul>
            <Text>All without adding conditional rendering branches inside the component.</Text>
            <Heading asChild id="example-button-component" className="mt-12 text-start sm:mt-24">
                <h2>Example: Button Component</h2>
            </Heading>
            <Text>
                Here is a simplified example of a Button component that uses Slot to support flexible rendering:
            </Text>
            <CodeBlock language="typescript" className="mt-6">
                <CodeBlockHeader>
                    <DocumentTextIcon />
                    <CodeBlockTitle>example-page.tsx</CodeBlockTitle>
                    <CodeBlockCopy />
                </CodeBlockHeader>
                <CodeBlockHeader className="justify-center gap-4 p-20">
                    <Button>
                        <span>Native Button</span>
                    </Button>
                    <Button asChild>
                        <a href="#example-button-component">
                            <span>As Link</span>
                        </a>
                    </Button>
                </CodeBlockHeader>
                <CodeBlockContent>
                    <CodeBlockCode>{SLOT_BUTTON_USAGE_CODE}</CodeBlockCode>
                </CodeBlockContent>
            </CodeBlock>
            <Text>
                The Button&apos;s styling and behavior remain unchanged. Only the rendered element changes. This keeps
                APIs small, expressive, and future-proof.
            </Text>
            <Heading asChild id="when-to-use-slot" className="mt-12 text-start sm:mt-24">
                <h2>When to Use Slot</h2>
            </Heading>
            <Text>
                Slot is ideal whenever a component needs to render as different elements based on context, such as:
            </Text>
            <ul className="ms-6 mt-6 mb-12 list-disc space-y-4">
                {SLOT_USAGE_BEST_PRACTICES.map((item) => (
                    <li key={item}>
                        <Text>{item}</Text>
                    </li>
                ))}
            </ul>
            <Text>
                Slot should not be used to conditionally render different components or to manage complex state logic.
            </Text>
            <ul className="ms-6 mt-6 mb-12 list-disc space-y-4">
                {SLOT_COMMON_MISTAKES.map((item) => (
                    <li key={item}>
                        <Text>{item}</Text>
                    </li>
                ))}
            </ul>
            <Heading asChild id="accessibility-considerations" className="mt-12 text-start sm:mt-24">
                <h2>Accessibility Considerations</h2>
            </Heading>
            <Text>
                Slot does not alter semantics, roles, keyboard behavior, or accessibility attributes on its own. It
                simply forwards props to its child element and renders no additional DOM nodes.
            </Text>
            <Text>This is a deliberate design choice.</Text>
            <Text>
                By avoiding automatic role assignment or behavior injection, Slot ensures that accessibility remains
                explicit and visible in the consuming component. The rendered element—whether it is a native HTML
                element or a custom component—retains full responsibility for semantic correctness.
            </Text>
            <Text>
                This approach prevents subtle accessibility bugs that can arise from overly clever abstractions that
                attempt to infer intent. Instead of guessing, Slot keeps control in the developer&apos;s hands. When
                using Slot, ensure that:
            </Text>
            <ul className="ms-6 mt-6 mb-12 list-disc space-y-4">
                {ACCESSIBILITY_CONSIDERATIONS_FOR_SLOT.map((item) => (
                    <li key={item}>
                        <Text>{item}</Text>
                    </li>
                ))}
            </ul>
            <Text>
                Slot makes flexible composition possible, but accessibility is never automatic. GrayscaleElements treats
                accessibility as a first-class concern—addressed through clear structure and intentional markup rather
                than hidden logic.
            </Text>
            <Heading asChild id="summary" className="mt-12 text-start sm:mt-24">
                <h2>Summary</h2>
            </Heading>
            <Text>
                The Slot utility is a powerful composition primitive that enables explicit prop forwarding without
                additional markup or behavior. By using Slot internally, GrayscaleElements components remain flexible,
                predictable, and easy to use across a wide range of scenarios. By introducing Slot early, the library
                establishes a consistent composition pattern used across buttons, links, interactive elements, and
                beyond.
            </Text>
            <Text>Slot doesn&apos;t try to be clever—it simply makes the right thing easy to express.</Text>
        </>
    );
}
