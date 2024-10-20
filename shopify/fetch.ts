import { isShopifyError } from './types/guards';
import { ensureStartsWith } from './utils';

type ExtractVariables<T> = T extends { variables: object }
    ? T['variables']
    : never;

const { SHOPIFY_STOREFRONT_ACCESS_TOKEN, SHOPIFY_STORE_DOMAIN } = process.env;
const SHOPIFY_GRAPHQL_API_ENDPOINT = '/api/2023-01/graphql.json';

const domain = SHOPIFY_STORE_DOMAIN
    ? ensureStartsWith(SHOPIFY_STORE_DOMAIN, 'https://')
    : '';
const endpoint = `${domain}${SHOPIFY_GRAPHQL_API_ENDPOINT}`;
const key = SHOPIFY_STOREFRONT_ACCESS_TOKEN!;

export async function shopifyFetch<T>({
    cache = 'force-cache',
    headers,
    query,
    tags,
    variables,
}: {
    cache?: RequestCache;
    headers?: HeadersInit;
    query: string;
    tags?: string[];
    variables?: ExtractVariables<T>;
}): Promise<{ status: number; body: T } | never> {
    try {
        const result = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Shopify-Storefront-Access-Token': key,
                ...headers,
            },
            body: JSON.stringify({
                ...(query && { query }),
                ...(variables && { variables }),
            }),
            cache,
            ...(tags && { next: { tags } }),
        });

        const body = await result.json();

        if (body.errors) {
            throw body.errors[0];
        }

        return {
            status: result.status,
            body,
        };
    } catch (e) {
        if (isShopifyError(e)) {
            // eslint-disable-next-line no-throw-literal
            throw {
                cause: e.cause?.toString() || 'unknown',
                status: e.status || 500,
                message: e.message,
                query,
            };
        }

        // eslint-disable-next-line no-throw-literal
        throw {
            error: e,
            query,
        };
    }
}
