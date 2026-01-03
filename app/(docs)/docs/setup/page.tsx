import type { Metadata } from "next";

import Link from "next/link";

import { ArrowLongLeftIcon, ArrowLongRightIcon, CommandLineIcon, DocumentTextIcon } from "@heroicons/react/24/solid";

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
    CodeBlock,
    CodeBlockCode,
    CodeBlockContent,
    CodeBlockCopy,
    CodeBlockHeader,
    CodeBlockTitle,
} from "@/components/ui/code-block";
import { Code } from "@/components/ui/code";

import {
    BUTTON_COMPONENT_CODE,
    CREATE_NEXT_APP_COMMAND,
    INSTALL_DEPENDENCIES_COMMAND,
    PRETTIER_CONFIG_CONTENT,
    SLOT_UTILITY_CODE,
    TAILWIND_CSS_STYLES,
    WHY_TAILWIND_CSS_STYLING,
} from "@/constants/docs";

export const metadata: Metadata = {
    title: "Setup & Installation | Grayscale Elements",
    description: "Instructions for setting up and installing Grayscale Elements in your project.",
};

export default function SetupPage() {
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
                        <BreadcrumbPage>Setup & Installation</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <Heading id="setup-and-installation" className="mt-6 text-start sm:mt-12">
                Setup & Installation
            </Heading>
            <Text size="large" className="text-muted-foreground">
                Start with a modern Next.js setup using TypeScript. GrayscaleElements is designed to work with standard
                Next.js conventions without requiring custom tooling or framework-specific abstractions.
            </Text>
            <Text className="font-medium">
                To setup GrayscaleElements in your Next.js project using TypeScript, please follow the steps given
                below:
            </Text>
            <Heading asChild id="project-setup" className="mt-12 text-start sm:mt-24">
                <h2>Project Setup</h2>
            </Heading>
            <Text>
                Start with a modern Next.js setup using TypeScript. GrayscaleElements is designed to work with standard
                Next.js conventions without requiring custom tooling or framework-specific abstractions.
            </Text>
            <Text>
                Use the official Next.js setup to ensure long-term stability and compatibility. Keep the project
                minimal—avoid unnecessary presets or boilerplate so every decision remains explicit and easy to
                understand.
            </Text>
            <Text className="mb-6">To create a new Next.js project with TypeScript, run the following command:</Text>
            <CodeBlock>
                <CodeBlockHeader>
                    <CommandLineIcon />
                    <CodeBlockTitle>Terminal</CodeBlockTitle>
                    <CodeBlockCopy />
                </CodeBlockHeader>
                <CodeBlockContent>
                    <CodeBlockCode>{CREATE_NEXT_APP_COMMAND}</CodeBlockCode>
                </CodeBlockContent>
            </CodeBlock>
            <Heading asChild id="installing-dependencies" className="mt-12 text-start sm:mt-24">
                <h2>Installing Dependencies</h2>
            </Heading>
            <Text className="mb-6">
                GrayscaleElements keeps dependencies minimal, explicit, and purpose-driven. No runtime UI frameworks or
                hidden abstractions are introduced—each dependency exists to support clarity, composition, and developer
                experience.
            </Text>
            <CodeBlock>
                <CodeBlockHeader>
                    <CommandLineIcon />
                    <CodeBlockTitle>Terminal</CodeBlockTitle>
                    <CodeBlockCopy />
                </CodeBlockHeader>
                <CodeBlockContent>
                    <CodeBlockCode>{INSTALL_DEPENDENCIES_COMMAND}</CodeBlockCode>
                </CodeBlockContent>
            </CodeBlock>
            <Text>
                Prettier ensures consistent code formatting across the project, while{" "}
                <strong>prettier-plugin-tailwindcss</strong> automatically sorts Tailwind utility classes. This improves
                readability and makes copied components easier to understand and maintain.{" "}
                <strong>@heroicons/react</strong> provides simple, accessible SVG icons that integrate naturally with
                React components without imposing styling or behavior constraints. <strong>tailwind-merge</strong> and{" "}
                <strong>clsx</strong> help manage conditional class names cleanly, while{" "}
                <strong>class-variance-authority</strong> supports scalable and maintainable styling patterns through
                variant-based class management.
            </Text>
            <Text>
                These dependencies support composition and clarity without introducing framework-level behavior or
                enforcing design systems. All styling, structure, and logic remain fully owned by your application.
            </Text>
            <Heading asChild id="prettier-configuration" className="mt-12 text-start sm:mt-24">
                <h2>Prettier Configuration</h2>
            </Heading>
            <Text>
                GrayscaleElements prioritizes readable, predictable code. To ensure consistent formatting across all
                components and utilities, Prettier is used as the single source of truth for code style.
            </Text>
            <Text>
                This setup ensures that copied components remain clean, predictable, and easy to customize—reinforcing
                the principle of <em>copy the code, own the code</em>.
            </Text>
            <Text className="mb-6">
                In the root of your project, create a file named <Code>.prettierrc</Code> and paste the following
                content. This configuration ensures consistent formatting and automatically sorts Tailwind CSS utility
                classes.
            </Text>
            <CodeBlock language="json">
                <CodeBlockHeader>
                    <DocumentTextIcon />
                    <CodeBlockTitle>.prettierrc</CodeBlockTitle>
                    <CodeBlockCopy />
                </CodeBlockHeader>
                <CodeBlockContent>
                    <CodeBlockCode>{PRETTIER_CONFIG_CONTENT}</CodeBlockCode>
                </CodeBlockContent>
            </CodeBlock>
            <Heading asChild id="configure-tailwind-css-styling" className="mt-12 text-start sm:mt-24">
                <h2>Configure Tailwind CSS Styling</h2>
            </Heading>
            <Text>
                GrayscaleElements uses Tailwind CSS with a minimal, neutral color foundation. Styling is intentionally
                explicit and local, avoiding global design systems or prescriptive theming layers. This approach ensures
                seamless integration into existing Tailwind projects without conflicts.
            </Text>
            <ul className="ms-6 mt-6 mb-12 list-disc space-y-4">
                {WHY_TAILWIND_CSS_STYLING.map((item) => (
                    <li key={item.label}>
                        <Text>
                            <strong>{item.label}:</strong>
                            <br />
                            {item.description}
                        </Text>
                    </li>
                ))}
            </ul>
            <Text className="mb-6">
                Replace the contents of your <Code>index.css</Code> or <Code>globals.css</Code> file with the following
                code. This sets up a stable grayscale palette and base styles used across all components.
            </Text>
            <CodeBlock language="css">
                <CodeBlockHeader>
                    <DocumentTextIcon />
                    <CodeBlockTitle>globals.css</CodeBlockTitle>
                    <CodeBlockCopy />
                </CodeBlockHeader>
                <CodeBlockContent>
                    <CodeBlockCode>{TAILWIND_CSS_STYLES}</CodeBlockCode>
                </CodeBlockContent>
            </CodeBlock>
            <Text className="mt-6">
                You are free to modify, extend, or replace these variables to match your application&apos;s identity.
                GrayscaleElements provides a foundation—not a constraint.
            </Text>
            <Heading asChild id="add-your-first-component" className="mt-12 text-start sm:mt-24">
                <h2>Add Your First Component</h2>
            </Heading>
            <Text>
                With the project setup complete, you&apos;re ready to add your first component. GrayscaleElements
                components are copied directly into your codebase, giving you full ownership over structure, styling,
                and behavior from day one.
            </Text>
            <Text>
                The first component you&apos;ll add is a <strong>Button</strong>. Before doing so, you&apos;ll create a
                small utility called <strong>Slot</strong>, which enables flexible composition and will be reused by
                many other components.
            </Text>
            <Text>
                Create the following file in your project: <Code>/components/utilities/slot.tsx</Code>
            </Text>
            <Text className="mb-6">
                The Slot utility allows components to pass their props to a child element instead of rendering a fixed
                HTML tag. This makes components more flexible without introducing configuration complexity or hidden
                behavior.
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
            <Text>
                You won&apos;t use Slot directly yet, but it enables patterns like rendering a button as a link or
                custom element—without sacrificing styling or behavior.
            </Text>
            <Text>
                Now that Slot is in place, add your first UI component. Create the following file:{" "}
                <Code>/components/ui/button.tsx</Code>
            </Text>
            <Text className="mb-6">
                This Button component is intentionally small and explicit. It uses Tailwind CSS for styling and supports
                a few controlled variants and sizes without enforcing a design system or application logic.
            </Text>
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
            <Text>
                Congratulations—you&apos;ve added your first GrayscaleElements component. From here, additional
                components follow the same pattern: small, composable, and fully owned by your project.
            </Text>
            <Heading asChild id="summary" className="mt-12 text-start sm:mt-24">
                <h2>Setup Summary</h2>
            </Heading>
            <Text>
                You&apos;ve completed the setup and added your first GrayscaleElements component. Your project is now
                configured with a clear foundation: explicit styling, predictable formatting, and composable UI
                primitives.
            </Text>
            <Text>
                Instead of installing a UI framework or relying on hidden abstractions, you copied real, readable code
                directly into your codebase. Every utility and component you added is fully owned by your application.
            </Text>
            <Text>
                With the Slot utility and Button component in place, you now have the core patterns used throughout
                GrayscaleElements. Additional components follow the same principles—small, explicit, and designed for
                composition.
            </Text>
            <Text>
                From here, you can continue exploring components, UI blocks, and templates, or start building your
                application using the primitives you&apos;ve just added.
            </Text>
            <div className="mt-24 flex items-center justify-between">
                <Button asChild variant="ghost">
                    <Link href="/docs">
                        <ArrowLongLeftIcon />
                        <span>Introduction</span>
                    </Link>
                </Button>
                <Button asChild variant="ghost">
                    <Link href="#">
                        <span>Components</span>
                        <ArrowLongRightIcon />
                    </Link>
                </Button>
            </div>
        </>
    );
}
