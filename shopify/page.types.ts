import { SEO } from './types';

export type Page = {
    id: string;
    title: string;
    handle: string;
    body: string;
    bodySummary: string;
    seo?: SEO;
    createdAt: string;
    updatedAt: string;
};

export type ShopifyPageOperation = {
    data: {
        pageByHandle: Page;
    };
    variables: {
        handle: string;
    };
};
