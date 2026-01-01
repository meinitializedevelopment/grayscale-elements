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
];

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
];

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
];

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
];
