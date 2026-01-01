import Link from "next/link";

import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Introduction } from "@/components/docs/introduction";
import { DesignPhilosophy } from "@/components/docs/introduction/design-philosophy";
import { LibraryScopeExclusions } from "@/components/docs/introduction/library-scope-exclusions";
import { ElementRelationship } from "@/components/docs/introduction/element-relationship";
import { LicenseAndUsage } from "@/components/docs/introduction/license-and-usage";
import { Button } from "@/components/ui/button";

export default function DocsPage() {
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
                        <BreadcrumbPage>Introduction</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <Introduction />
            <DesignPhilosophy />
            <ElementRelationship />
            <LibraryScopeExclusions />
            <LicenseAndUsage />
            <div className="mt-24 flex items-center justify-end">
                <Button asChild variant="ghost">
                    <Link href="#">
                        <span>Setup & Installation</span>
                        <ArrowLongRightIcon />
                    </Link>
                </Button>
            </div>
        </>
    );
}
