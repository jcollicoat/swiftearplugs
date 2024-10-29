import { shopifyFetch } from './fetch';
import { getPageQuery } from './page.fragments';
import { Page, ShopifyPageOperation } from './page.types';

export async function getPage(handle: string): Promise<Page | null> {
    const res = await shopifyFetch<ShopifyPageOperation>({
        query: getPageQuery,
        cache: 'no-store',
        variables: { handle },
    });

    return res.body.data.pageByHandle;
}
