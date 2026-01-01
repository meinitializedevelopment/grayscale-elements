import { Container } from "@/components/ui/container";
import { Link } from "@/components/ui/link";
import { Text } from "@/components/ui/text";

export function Footer() {
    return (
        <footer className="bg-muted border-t">
            <Container className="flex items-center justify-between max-sm:flex-col max-sm:gap-4">
                <Link
                    href="https://github.com/meinitializedevelopment/grayscale-elements/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs underline"
                >
                    Source Code on GitHub
                </Link>
                <Text className="mt-0! text-xs">
                    Built with ❤️ for developers by{" "}
                    <Link
                        href="https://github.com/meinitializedevelopment/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs underline"
                    >
                        Nikhil Kumar Singh.
                    </Link>
                </Text>
            </Container>
        </footer>
    );
}
