import { Connection, Image, Money, SEO } from './types';

type ProductOption = {
    id: string;
    name: string;
    values: string[];
};

export type ProductVariant = {
    id: string;
    title: string;
    image: Image;
    availableForSale: boolean;
    selectedOptions: {
        name: string;
        value: string;
    }[];
    price: Money;
    compareAtPrice: Money | null;
};

export type ShopifyProduct = {
    id: string;
    handle: string;
    availableForSale: boolean;
    title: string;
    description: string;
    descriptionHtml: string;
    options: ProductOption[];
    priceRange: {
        maxVariantPrice: Money;
        minVariantPrice: Money;
    };
    variants: Connection<ProductVariant>;
    featuredImage?: Image;
    images: Connection<Image>;
    seo: SEO;
    tags: string[];
    updatedAt: string;
};

export type Product = Omit<ShopifyProduct, 'variants' | 'images'> & {
    variants: ProductVariant[];
    images: Image[];
};

export type ShopifyProductOperation = {
    data: { product: ShopifyProduct };
    variables: {
        handle: string;
    };
};
