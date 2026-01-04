import { CloudArrowDownIcon, SparklesIcon } from "@heroicons/react/24/solid";

export const DESIGN_PHILOSOPHIES = [
    {
        label: "Copy the Code, Own the Code",
        description:
            "All components and UI blocks are designed to be copied directly into your project. There is no dependency on runtime packages, global configuration, or hidden logic. Once the code is in your codebase, you fully own it and are free to modify, extend, or refactor it as your project evolves.",
    },
    {
        label: "Explicit Over Implicit",
        description:
            "GrayscaleElements avoids implicit behavior and hidden side effects. State, structure, and interactions are intentionally explicit and controlled by the consumer. If something happens, it should be discoverable by reading the component code directly.",
    },
    {
        label: "Composition Over Configuration",
        description:
            "Instead of relying on large configuration objects or rigid variants, components are designed to be composed using standard React patterns. Small primitives and utilities enable flexible composition without enforcing strict structure or design constraints.",
    },
    {
        label: "Minimal Abstraction, No Framework Logic",
        description:
            "This library intentionally avoids application-level concerns such as routing, form state management, data fetching, permissions, or business logic. Those responsibilities belong to your application, not the UI layer.",
    },
    {
        label: "Developer Experience Comes First",
        description:
            "Every component is written with readability and predictability in mind. APIs are TypeScript-first, styling is transparent through Tailwind CSS, and component structure is kept easy to understand and customize for both small projects and large codebases.",
    },
    {
        label: "Designed for Real Projects",
        description:
            "GrayscaleElements is created for production environments using Next.js with TypeScript and Vite with React and TypeScript. The focus is on practical usage, performance, accessibility, and maintainability in real-world applications.",
    },
    {
        label: "Stable Foundations, Flexible Growth",
        description:
            "The core components are intentionally conservative and stable. New components, UI blocks, and templates are added gradually, guided by real usage and iteration rather than strict version cycles or feature checklists.",
    },
] as const;

export const LIBRARY_SCOPE_EXCLUSIONS = [
    {
        label: "Not a Full UI Framework",
        description:
            "GrayscaleElements does not provide an opinionated application structure, global state management, or end-to-end solutions. It focuses on reusable UI primitives and patterns rather than defining how an entire application should be built.",
    },
    {
        label: "Not a Headless or Behavior-Heavy Library",
        description:
            "This collection is not a headless UI system and does not attempt to abstract complex behaviors into hidden logic. Components expose structure and basic interactions only, leaving advanced behavior and state management to your application.",
    },
    {
        label: "Not Theme or Design-System Prescriptive",
        description:
            "GrayscaleElements does not enforce a specific visual identity, theme, or design system. Styles are intentionally minimal and expressed through Tailwind CSS utilities so that components can be adapted to fit any brand or design language.",
    },
    {
        label: "Not Responsible for Application Logic",
        description:
            "Concerns such as routing, data fetching, form validation, authentication, authorization, and business rules are outside the scope of this library. These responsibilities are expected to be handled by the consuming application.",
    },
    {
        label: "Not a Component Marketplace",
        description:
            "This project is not a marketplace for selling components or templates. All provided code is free to use and intended for direct integration into your projects, without licensing restrictions related to resale or redistribution as a paid product.",
    },
    {
        label: "Not a Replacement for Learning Core Technologies",
        description:
            "GrayscaleElements assumes familiarity with React, TypeScript, and Tailwind CSS. It is designed to speed up development, not to replace an understanding of the underlying technologies or frameworks.",
    },
    {
        label: "Not a Versioned or Release-Driven Library",
        description:
            "GrayscaleElements does not follow a strict versioning or release cycle. Components, UI blocks, and templates are added incrementally based on real usage, testing, and iteration rather than predefined milestones. This approach prioritizes stability and quality over frequent releases or version marketing.",
    },
    {
        label: "Not an Abstraction Over External UI Libraries",
        description:
            "This library does not wrap, re-export, or theme existing UI libraries. All components and utilities are implemented from scratch without depending on third-party UI frameworks. This ensures full control over behavior, styling, and evolution of the codebase.",
    },
    {
        label: "Not Designed for Drop-In Global Styling",
        description:
            "GrayscaleElements does not provide global CSS resets, opinionated design tokens, or automatic theming systems. Styling is intentionally local and transparent, allowing you to integrate components into existing design systems or Tailwind configurations without conflicts or overrides.",
    },
] as const;

export const ELEMENT_RELATIONSHIP = [
    {
        label: "Components",
        description:
            "Components are the foundation of GrayscaleElements. They are small, reusable UI primitives such as buttons, inputs, layouts, and navigation elements that you can copy directly into your codebase and customize as needed.",
    },
    {
        label: "UI Blocks",
        description:
            "UI Blocks are pre-built interface patterns composed of multiple components working together. They represent common sections like hero areas, pricing tables, or feature grids, and are designed for quick reuse across pages.",
    },
    {
        label: "Templates",
        description:
            "Templates are complete page and layout examples built using components and UI blocks. They demonstrate how everything fits together in real applications and can be copied, customized, or downloaded as a starting point.",
    },
    {
        label: "Utilities",
        description:
            "Utilities are small helper components and functions that support composition and structure. They are not UI elements themselves, but tools that make patterns like prop forwarding or portal rendering possible.",
    },
] as const;

export const LICENSE_AND_USAGE = [
    {
        label: "Usage Rights",
        description:
            "GrayscaleElements is free to use in both personal and commercial projects without any licensing fees or permission or restrictions.",
    },
    {
        label: "Resale and Redistribution",
        description: "GrayscaleElements cannot be resold or redistributed as a paid product.",
    },
    {
        label: "Ownership",
        description: "The ownership of GrayscaleElements remains with the original author.",
    },
] as const;

export const CREATE_NEXT_APP_COMMAND = `npx create-next-app@latest your-application-name --typescript
code your-application-name` as const;

export const INSTALL_DEPENDENCIES_COMMAND = `npm install --save-dev prettier prettier-plugin-tailwindcss
npm install @heroicons/react tailwind-merge clsx class-variance-authority` as const;

export const PRETTIER_CONFIG_CONTENT = `{
    "bracketSameLine": false,
    "bracketSpacing": true,
    "htmlWhitespaceSensitivity": "strict",
    "jsxSingleQuote": false,
    "plugins": ["prettier-plugin-tailwindcss"],
    "printWidth": 120,
    "semi": true,
    "singleAttributePerLine": false,
    "singleQuote": false,
    "tabWidth": 4,
    "trailingComma": "es5"
}` as const;

export const TAILWIND_CSS_STYLES = `@import "tailwindcss";

@theme inline {
    --color-background: oklch(1 0 0);
    --color-foreground: oklch(0.14 0 0);
    --color-primary: oklch(0.14 0 0);
    --color-primary-foreground: oklch(0.99 0 0);
    --color-secondary: oklch(0.92 0 0);
    --color-secondary-foreground: oklch(0.14 0 0);
    --color-destructive: oklch(0.51 0.19 28);
    --color-destructive-foreground: oklch(0.97 0.01 17);
    --color-muted: oklch(0.97 0 0);
    --color-muted-foreground: oklch(0.56 0 0);
    --color-border: oklch(0.92 0 0);
}

@layer base {
    * {
        scrollbar-width: none;
        scroll-behavior: smooth;
        border-color: var(--color-border);
        outline: none;
    }

    body {
        font-weight: 400;
        background-color: var(--color-background);
        color: var(--color-foreground);
        overflow-x: hidden;
    }
}` as const;

export const WHY_TAILWIND_CSS_STYLING = [
    {
        label: "Utility-first approach",
        description:
            "Tailwind's utility classes promote clear, maintainable styling directly in the markup without complex CSS.",
    },
    {
        label: "Neutral Foundation",
        description: "A grayscale palette makes components adaptable to any brand or design system.",
    },
    {
        label: "Explicit styling",
        description:
            "All color tokens are defined as CSS variables, making them easy to override without hidden configuration.",
    },
    {
        label: "No global theming framework",
        description: "This setup avoids enforced themes or automatic styling behavior.",
    },
    {
        label: "Seamless integration",
        description: "Tailwind CSS is widely used in modern web projects, ensuring compatibility and ease of adoption.",
    },
] as const;

export const SLOT_UTILITY_CODE = `import { cloneElement, isValidElement, type HTMLAttributes } from "react";

import { cn } from "@/library/utilities";

function handleMergeProps(...props: Array<Record<string, unknown>>) {
    const combinedProps = {} as Record<string, unknown>;

    for (const prop of props) {
        for (const key in prop) {
            const previous = combinedProps[key];
            const next = prop[key];

            if (key === "className") {
                combinedProps[key] = cn(previous as string, next as string);
            } else if (key === "style") {
                combinedProps[key] = { ...(previous as object), ...(next as object) };
            } else if (/^on[A-Z]/.test(key) && typeof previous === "function" && typeof next === "function") {
                combinedProps[key] = (...args: Array<unknown>) => {
                    previous(...args);
                    next(...args);
                };
            } else {
                combinedProps[key] = next ?? previous;
            }
        }
    }

    return combinedProps;
}

export function Slot({ children, ...props }: HTMLAttributes<HTMLElement>) {
    if (!isValidElement(children)) {
        throw new Error("Slot children must be a valid react element");
    }

    return cloneElement(children, handleMergeProps(children.props as Record<string, unknown>, props));
}
` as const;

export const BUTTON_COMPONENT_CODE = `import { type ComponentPropsWithoutRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { Slot } from "@/components/utilities/slot";
import { cn } from "@/library/utilities";

export const button = cva(
    "focus-visible:ring-offset-background inline-flex cursor-pointer items-center justify-center rounded text-sm font-medium whitespace-nowrap transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
        variants: {
            variant: {
                primary: "bg-primary text-primary-foreground hover:bg-primary/80 focus-visible:ring-primary",
                secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 focus-visible:ring-secondary",
                destructive:
                    "bg-destructive text-destructive-foreground hover:bg-destructive/80 focus-visible:ring-destructive",
                outline: "bg-background text-foreground hover:bg-muted focus-visible:ring-secondary border",
                ghost: "text-foreground hover:bg-muted focus-visible:ring-secondary bg-transparent",
            },
            size: { small: "h-8 gap-1 px-3 py-2", medium: "h-10 gap-2 px-4 py-3", icon: "size-8" },
        },
        defaultVariants: { variant: "primary", size: "medium" },
    }
);

type ButtonProps = ComponentPropsWithoutRef<"button"> & VariantProps<typeof button> & { asChild?: boolean };

export function Button({ className, variant, size, asChild, ...props }: ButtonProps) {
    const Component = asChild ? Slot : "button";

    return <Component className={cn(button({ variant, size }), className)} {...props} />;
}
` as const;

export const DRAWBACKS_OF_NOT_USING_SLOT = [
    "Multiple conditional render paths",
    "Boolean flags like asChild or asLink or isAnchor",
    "Hard-coded polymorphism that's difficult to extend",
    "Hidden behavior that's hard to reason about",
] as const;

export const DESIGN_PRINCIPLES_OF_SLOT = [
    { label: "Explicit over implicit", description: "No magic rendering logic" },
    { label: "Composition over configuration", description: "Consumers control structure" },
    { label: "No framework opinions", description: "Works with native elements or custom components" },
    { label: "Minimal abstraction", description: "Just enough logic to solve one problem well" },
] as const;

export const SLOT_CHARACTERISTICS = [
    "Only supports a single child",
    "Does not render additional DOM nodes",
    "Preserves the child's original element type",
    "Merges props in a predictable order",
    "Avoiding prop drilling",
    "Enabling flexible component composition",
    "Supporting higher-order components",
] as const;

export const SLOT_USAGE_SCENARIOS = [
    "Rendering a button as an anchor",
    "Using framework-specific link components",
    "Preserving styles, refs, and accessibility",
] as const;

export const SLOT_BUTTON_USAGE_CODE = `import { Button } from "@/components/ui/button";

export function ExamplePage() {
    return (
        <div className="flex items-center justify-center gap-4 p-12">
            <Button>
                <span>Native Button</span>
            </Button>
            <Button asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <span>As Link</span>
                </a>
            </Button>
        </div>
    );
}` as const;

export const SLOT_USAGE_BEST_PRACTICES = [
    "A component's structure should be controlled by the consumer",
    "Styling and behavior need to remain consistent regardless of the rendered element",
    'You want to avoid as="tag" APIs or enum-based polymorphism',
    "Flexibility matters more than strict encapsulation",
] as const;

export const SLOT_COMMON_MISTAKES = [
    "Using multiple children instead of a single child",
    "The rendered element must be fixed for semantic reasons",
    "Relying on implicit behavior or hidden logic",
    "Not preserving refs or accessibility attributes",
    "The component owns its entire DOM structure",
    "Overcomplicating prop merging logic",
    "Simpler composition patterns are sufficient",
] as const;

export const ACCESSIBILITY_CONSIDERATIONS_FOR_SLOT = [
    "The rendered element has appropriate semantics for its purpose",
    "Interactive elements include correct keyboard and focus behavior",
    "ARIA attributes are applied intentionally when required",
    "Links, buttons, and controls are not interchanged without considering accessibility implications",
] as const;

export const BUTTON_PREVIEW = `import { Button } from "@/components/ui/button";
    
export default function ButtonExamplePage() {
    return (
        <Button>
            <span>Button Component</span>
        </Button>
    );
}` as const;

export const BUTTON_DESIGN_GOALS = [
    { label: "Explicit ownership", description: "The full source code lives in your project" },
    { label: "Composable structure", description: "Rendering is controlled by the consumer when needed" },
    { label: "Predictable styling", description: "Variants are explicit and opt-in" },
    { label: "Minimal API surface", description: "No configuration-heavy props or hidden logic" },
] as const;

export const HOW_BUTTON_WORKS = [
    "Tailwind CSS for utility-based styling",
    "class-variance-authority (CVA) to define variants and sizes",
    "Slot to enable flexible rendering via composition",
    "React for declarative structure and behavior",
] as const;

export const BUTTON_VARIANTS_AND_SIZES = [
    {
        label: "Primary",
        description: "The default button style. Use Primary buttons for the most important action on a page.",
        variant: "primary",
        size: "medium",
        text: "Primary",
        srOnly: false,
        icon: undefined,
        code: `import { Button } from "@/components/ui/button";
    
export default function PrimaryButtonPage() {
    return (
        <Button variant="primary">
            <span>Primary</span>
        </Button>
    );
}`,
    },
    {
        label: "Secondary",
        description:
            "A lower-emphasis alternative to the primary button. Use Secondary buttons for supporting actions.",
        variant: "secondary",
        size: "medium",
        text: "Secondary",
        srOnly: false,
        icon: undefined,
        code: `import { Button } from "@/components/ui/button";
    
export default function SecondaryButtonPage() {
    return (
        <Button variant="secondary">
            <span>Secondary</span>
        </Button>
    );
}`,
    },
    {
        label: "Destructive",
        description: "Used for actions that result in permanent changes or data loss, such as deleting content.",
        variant: "destructive",
        size: "medium",
        text: "Destructive",
        srOnly: false,
        icon: undefined,
        code: `import { Button } from "@/components/ui/button";
    
export default function DestructiveButtonPage() {
    return (
        <Button variant="destructive">
            <span>Destructive</span>
        </Button>
    );
}`,
    },
    {
        label: "Outline",
        description:
            "A neutral variant with minimal emphasis. Useful when you want a button that blends into its surroundings while remaining interactive.",
        variant: "outline",
        size: "medium",
        text: "Outline",
        srOnly: false,
        icon: undefined,
        code: `import { Button } from "@/components/ui/button";
    
export default function OutlineButtonPage() {
    return (
        <Button variant="outline">
            <span>Outline</span>
        </Button>
    );
}`,
    },
    {
        label: "Ghost",
        description: "The least prominent variant. Ideal for subtle actions, toolbars, or inline interactions.",
        variant: "ghost",
        size: "medium",
        text: "Ghost",
        srOnly: false,
        icon: undefined,
        code: `import { Button } from "@/components/ui/button";
    
export default function GhostButtonPage() {
    return (
        <Button variant="ghost">
            <span>Ghost</span>
        </Button>
    );
}`,
    },
    {
        label: "With Icon",
        description:
            "Buttons can contain icons alongside text. Icons inherit sizing and alignment automatically. Use icons to reinforce meaning, not replace labels.",
        variant: "outline",
        size: "medium",
        text: "With Icon",
        srOnly: false,
        icon: CloudArrowDownIcon,
        code: `import { CloudArrowDownIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";

export default function WithIconButtonPage() {
    return (
        <Button variant="outline">
            <CloudArrowDownIcon />
            <span>With Icon</span>
        </Button>
    );
}`,
    },
    {
        label: "Small",
        description: "A compact version of the button for dense interfaces or secondary actions.",
        variant: "outline",
        size: "small",
        text: "Small",
        srOnly: false,
        icon: undefined,
        code: `import { Button } from "@/components/ui/button";
    
export default function SmallButtonPage() {
    return (
        <Button variant="outline" size="small">
            <span>Small</span>
        </Button>
    );
}`,
    },
    {
        label: "Icon",
        description:
            "A square button designed to contain only an icon. Use icon buttons sparingly and ensure the action is clear through context or accessible labeling.",
        variant: "outline",
        size: "icon",
        text: "Icon Button",
        srOnly: true,
        icon: SparklesIcon,
        code: `import { SparklesIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";

export default function IconButtonPage() {
    return (
        <Button variant="outline" size="icon">
            <SparklesIcon />
            <span className="sr-only">Icon Button</span>
        </Button>
    );
}`,
    },
] as const;

export const BUTTON_AS_CHILD_USAGE_CODE = `import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function AsChildButtonPage() {
    return (
        <Button asChild variant="outline">
            <Link href="#">
                <span>As Link</span>
            </Link>
        </Button>
    );
}` as const;

export const ACCESSIBILITY_CONSIDERATIONS_FOR_BUTTON = [
    "Correct semantic elements are used for buttons and links",
    "Focus styles remain visible when using asChild",
    "Keyboard interaction is preserved",
    "Clickable links and buttons are not confused interchangeably",
] as const;

export const BUTTON_COMPONENT_API_TABLE = [
    {
        name: "variant",
        type: "primary | secondary | destructive | outline | ghost",
        default: "primary",
        description: "Controls the visual style of the button",
    },
    {
        name: "size",
        type: "small | medium | icon",
        default: "medium",
        description: "Controls the size and padding of the button",
    },
    {
        name: "asChild",
        type: "boolean",
        default: "false",
        description: "Renders the button using a Slot for flexible composition",
    },
] as const;

export const BADGE_PREVIEW = `import { Badge } from "@/components/ui/badge";
    
export default function BadgeExamplePage() {
    return (
        <Badge>Badge Component</Badge>
    );
}` as const;

export const BADGE_DESIGN_GOALS = [
    { label: "Explicit ownership", description: "All code lives in your project" },
    { label: "Minimal responsibility", description: "Visual structure only, no behavior" },
    { label: "Composable rendering", description: "Can adapt to surrounding markup when needed" },
    { label: "Predictable styling", description: "Variants are controlled and intentional" },
] as const;

export const BADGE_COMPONENT_CODE = `import { type ComponentPropsWithoutRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { Slot } from "@/components/utilities/slot";
import { cn } from "@/library/utilities";

export const badge = cva(
    "focus-visible:ring-offset-background inline-flex h-6 w-fit items-center justify-center gap-1 rounded-full px-3 py-1 text-xs font-medium whitespace-nowrap transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
        variants: {
            variant: {
                primary: "bg-primary text-primary-foreground hover:bg-primary/80 focus-visible:ring-primary",
                secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 focus-visible:ring-secondary",
                destructive:
                    "bg-destructive text-destructive-foreground hover:bg-destructive/80 focus-visible:ring-destructive",
                outline: "bg-background text-foreground hover:bg-muted focus-visible:ring-secondary border",
            },
        },
        defaultVariants: { variant: "primary" },
    }
);

type BadgeProps = ComponentPropsWithoutRef<"span"> & VariantProps<typeof badge> & { asChild?: boolean };

export function Badge({ className, variant, asChild, ...props }: BadgeProps) {
    const Component = asChild ? Slot : "span";

    return <Component className={cn(badge({ variant }), className)} {...props} />;
}` as const;

export const HOW_BADGE_WORKS = [
    "Tailwind CSS for utility-based styling",
    "class-variance-authority (CVA) to define visual variants",
    "Slot to enable optional compositional rendering",
] as const;

export const BADGE_VARIANTS = [
    {
        label: "Primary",
        description: "The default badge style. Use Primary for neutral or general-purpose labels.",
        variant: "primary",
        code: `import { Badge } from "@/components/ui/badge";

export default function PrimaryBadgePage() {
    return (
        <Badge variant="primary">Primary</Badge>
    );
}`,
    },
    {
        label: "Secondary",
        description:
            "A lower-emphasis alternative. Use Secondary badges when the label should be visible but not dominant.",
        variant: "secondary",
        code: `import { Badge } from "@/components/ui/badge";

export default function SecondaryBadgePage() {
    return (
        <Badge variant="secondary">Secondary</Badge>
    );
}`,
    },
    {
        label: "Destructive",
        description: "Use for critical or warning-related labels that indicate errors, danger, or irreversible states.",
        variant: "destructive",
        code: `import { Badge } from "@/components/ui/badge";

export default function DestructiveBadgePage() {
    return (
        <Badge variant="destructive">Destructive</Badge>
    );
}`,
    },
    {
        label: "Outline",
        description:
            "A minimal badge with a subtle border. Useful when badges should blend into dense interfaces while remaining legible.",
        variant: "outline",
        code: `import { Badge } from "@/components/ui/badge";

export default function OutlineBadgePage() {
    return (
        <Badge variant="outline">Outline</Badge>
    );
}`,
    },
] as const;

export const BADGE_AS_CHILD_USAGE_CODE = `import Link from "next/link";

import { Badge } from "@/components/ui/badge";

export default function AsChildBadgePage() {
    return (
        <Badge asChild variant="outline">
            <Link href="#">
                <span>As Link</span>
            </Link>
        </Badge>
    );
}` as const;

export const ACCESSIBILITY_CONSIDERATIONS_FOR_BADGE = [
    "Do not rely on color alone to communicate critical information",
    "Ensure important status changes are conveyed through additional context (e.g., text, icons)",
    "Avoid using Badge as a clickable element unless semantics are explicitly handled elsewhere",
] as const;

export const BADGE_COMPONENT_API_TABLE = [
    {
        name: "variant",
        type: "primary | secondary | destructive | outline",
        default: "primary",
        description: "Controls the visual style of the badge",
    },
    {
        name: "asChild",
        type: "boolean",
        default: "false",
        description: "Renders the badge using a Slot for flexible composition",
    },
] as const;
