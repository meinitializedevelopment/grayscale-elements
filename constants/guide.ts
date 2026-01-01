import {
    AdjustmentsHorizontalIcon,
    ClipboardDocumentCheckIcon,
    MagnifyingGlassCircleIcon,
} from "@heroicons/react/24/solid";

export const GUIDE = [
    {
        icon: MagnifyingGlassCircleIcon,
        label: "Explore & Select Components",
        description:
            "Browse our extensive library of pre-built UI components to find the ones that best suit your project's needs.",
    },
    {
        icon: ClipboardDocumentCheckIcon,
        label: "Copy Code Snippets",
        description: "Easily copy the code snippets for the selected components directly from our documentation.",
    },
    {
        icon: AdjustmentsHorizontalIcon,
        label: "Customize & Integrate",
        description:
            "Tailor the components to fit your design and functionality requirements, then seamlessly integrate them into your application.",
    },
] as const;
