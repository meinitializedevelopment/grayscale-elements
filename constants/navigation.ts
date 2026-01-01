export const DOCS_SIDEBAR_NAVIGATION_LINKS = [
    {
        label: "Get Started",
        links: [
            { label: "Introduction", href: "/docs" },
            { label: "Setup & Installation", href: "#" },
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
        { label: "Prerequisites", href: "#" },
        { label: "Project Setup", href: "#" },
        { label: "Installing Dependencies", href: "#" },
        { label: "Prettier Configuration", href: "#" },
        { label: "Tailwind CSS Configuration", href: "#" },
        { label: "Utilities", href: "#" },
        { label: "Folder Structure", href: "#" },
        { label: "Adding Button Component", href: "#" },
        { label: "Summary", href: "#" },
    ],
} as const;
