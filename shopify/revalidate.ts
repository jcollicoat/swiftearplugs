import { revalidateTag } from 'next/cache';
import { headers } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { COLLECTION_WEBHOOKS, PRODUCT_WEBHOOKS, TAGS } from './constants';

const { SHOPIFY_REVALIDATION_SECRET } = process.env;

// This is called from `app/api/revalidate/route.ts` so providers can control revalidation logic.
// eslint-disable-next-line require-await
export const revalidate = async (req: NextRequest): Promise<NextResponse> => {
    // We always need to respond with a 200 status code to Shopify,
    // otherwise it will continue to retry the request.

    const topic = headers().get('x-shopify-topic') || 'unknown';
    const secret = req.nextUrl.searchParams.get('secret');
    const isCollectionUpdate = COLLECTION_WEBHOOKS.includes(topic);
    const isProductUpdate = PRODUCT_WEBHOOKS.includes(topic);

    if (!secret || secret !== SHOPIFY_REVALIDATION_SECRET) {
        console.error('Invalid revalidation secret.');
        return NextResponse.json({ status: 200 });
    }

    if (!isCollectionUpdate && !isProductUpdate) {
        // We don't need to revalidate anything for any other topics.
        return NextResponse.json({ status: 200 });
    }

    if (isCollectionUpdate) {
        revalidateTag(TAGS.collections);
    }

    if (isProductUpdate) {
        revalidateTag(TAGS.products);
    }

    return NextResponse.json({
        status: 200,
        revalidated: true,
        now: Date.now(),
    });
};
