export const DOCS_SIDEBAR_NAVIGATION_LINKS = [
    {
        label: "Get Started",
        links: [
            { label: "Introduction", href: "#" },
            { label: "Setup & Installation", href: "#" },
        ],
    },
    { label: "Components", links: [{ label: "Button", href: "#" }] },
    { label: "Utilities", links: [{ label: "Slot", href: "#" }] },
];

export const TOC_SIDEBAR_NAVIGATION_LINKS = {
    DOCS: [
        { label: "Introduction", href: "#" },
        { label: "Design Philosophy", href: "#" },
        { label: "What This Library is Not", href: "#" },
        { label: "How Everything Fits Together", href: "#" },
        { label: "Quick Start", href: "#" },
        { label: "License and Usage", href: "#" },
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
