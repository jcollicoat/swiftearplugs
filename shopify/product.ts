import { TAGS } from './constants';
import { shopifyFetch } from './fetch';
import { getProductQuery } from './product.fragments';
import {
    Product,
    ShopifyProduct,
    ShopifyProductOperation,
} from './product.types';
import { Connection, Image } from './types';
import { removeEdgesAndNodes } from './utils';

const HIDDEN_PRODUCT_TAG = 'nextjs-frontend-hidden';

const reshapeImages = (images: Connection<Image>, productTitle: string) => {
    const flattened = removeEdgesAndNodes(images);

    return flattened.map((image) => {
        const filename = image.url.match(/.*\/(.*)\..*/)?.[1];
        return {
            ...image,
            altText: image.altText || `${productTitle} - ${filename}`,
        };
    });
};

const reshapeProduct = (
    product: ShopifyProduct,
    filterHiddenProducts: boolean = true,
) => {
    if (
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        !product ||
        (filterHiddenProducts && product.tags.includes(HIDDEN_PRODUCT_TAG))
    ) {
        return undefined;
    }

    const { images, variants, ...rest } = product;

    return {
        ...rest,
        images: reshapeImages(images, product.title),
        variants: removeEdgesAndNodes(variants),
    };
};

export const getProduct = async (
    handle: string,
): Promise<Product | undefined> => {
    const res = await shopifyFetch<ShopifyProductOperation>({
        query: getProductQuery,
        tags: [TAGS.products],
        variables: {
            handle,
        },
    });

    return reshapeProduct(res.body.data.product, false);
};
