import { AdjustmentsHorizontalIcon, CommandLineIcon, RocketLaunchIcon, SparklesIcon } from "@heroicons/react/24/solid";

export const FEATURES = [
    {
        icon: RocketLaunchIcon,
        label: "Performance Optimized",
        description: "Built with performance in mind to ensure fast load times and smooth interactions.",
    },
    {
        icon: AdjustmentsHorizontalIcon,
        label: "Customizable",
        description: "Easily tailor components to fit your unique design and functionality needs.",
    },
    {
        icon: CommandLineIcon,
        label: "Production Ready",
        description:
            "Thoroughly tested and reliable components that you can confidently use in your production applications.",
    },
    {
        icon: SparklesIcon,
        label: "Modular Design & Tech Stack",
        description:
            "Built with a modern tech stack and modular design principles for easy integration and scalability.",
    },
] as const;
