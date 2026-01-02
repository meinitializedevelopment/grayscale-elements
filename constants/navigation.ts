export const DOCS_SIDEBAR_NAVIGATION_LINKS = [
    {
        label: "Get Started",
        links: [
            { label: "Introduction", href: "/docs" },
            { label: "Setup & Installation", href: "/docs/setup" },
        ],
    },
    { label: "Components", links: [{ label: "Button", href: "#" }] },
    { label: "Utilities", links: [{ label: "Slot", href: "#" }] },
];

export const TOC_SIDEBAR_NAVIGATION_LINKS = {
    DOCS: [
        { label: "Introduction", href: "#introduction" },
        { label: "Design Philosophy", href: "#design-philosophy" },
        { label: "How Everything Fits Together", href: "#how-everything-fits-together" },
        { label: "Library Scope Exclusions", href: "#library-scope-exclusions" },
        { label: "License and Usage", href: "#license-and-usage" },
    ],
    SETUP: [
        { label: "Project Setup", href: "#project-setup" },
        { label: "Installing Dependencies", href: "#installing-dependencies" },
        { label: "Prettier Configuration", href: "#prettier-configuration" },
        { label: "Configure Tailwind CSS Styling", href: "#configure-tailwind-css-styling" },
        { label: "Add Your First Component", href: "#add-your-first-component" },
        { label: "Summary", href: "#summary" },
    ],
} as const;
