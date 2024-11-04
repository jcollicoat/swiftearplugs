import { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import { PageContent } from '@Layout/PageContent/PageContent';
import { getPage } from 'shopify/page';

export async function generateMetadata(
    { params: { slug } }: { params: { slug: string } },
    parent: ResolvingMetadata,
): Promise<Metadata> {
    const pageData = await getPage(slug);

    return {
        title: pageData
            ? (pageData.seo?.title ?? pageData.title)
            : (await parent).title,
        description: pageData?.seo?.description
            ? pageData.seo.description
            : (await parent).description,
    };
}

export default async function Page({
    params: { slug },
}: {
    params: { slug: string };
}) {
    const pageData = await getPage(slug);

    if (!pageData) notFound();

    return (
        // TODO: Refactor to long-form content and pull hero out to page level
        <PageContent
            title={pageData.title}
            lastUpdated={pageData.updatedAt}
            body={pageData.body}
        />
    );
}
