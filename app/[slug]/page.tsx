import { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import { PageContent } from '@Layout/PageContent/PageContent';
import { getPage } from 'shopify/page';

export async function generateMetadata(
    { params: { slug } }: { params: { slug: string } },
    parent: ResolvingMetadata,
): Promise<Metadata> {
    const pageData = await getPage(slug);

    // optionally access and extend (rather than replace) parent metadata
    // const previousImages = (await parent).openGraph?.images || []; // TODO: OG images

    return {
        title: pageData
            ? `${pageData.seo?.title ?? pageData.title} | Swift Earplugs`
            : (await parent).title,
        description: pageData
            ? pageData.seo?.description
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
        <PageContent
            title={pageData.title}
            lastUpdated={pageData.updatedAt}
            body={pageData.body}
        />
    );
}
