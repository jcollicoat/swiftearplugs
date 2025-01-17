import { imageFragment, seoFragment } from './fragments';

export const productFragment = /* GraphQL */ `
    fragment product on Product {
        id
        handle
        availableForSale
        title
        description
        descriptionHtml
        options {
            id
            name
            values
        }
        priceRange {
            maxVariantPrice {
                amount
                currencyCode
            }
            minVariantPrice {
                amount
                currencyCode
            }
        }
        variants(first: 250) {
            edges {
                node {
                    id
                    title
                    image {
                        ...image
                    }
                    availableForSale
                    selectedOptions {
                        name
                        value
                    }
                    price {
                        amount
                        currencyCode
                    }
                    compareAtPrice {
                        amount
                        currencyCode
                    }
                }
            }
        }
        featuredImage {
            ...image
        }
        images(first: 20) {
            edges {
                node {
                    ...image
                }
            }
        }
        seo {
            ...seo
        }
        tags
        updatedAt
    }
    ${imageFragment}
    ${seoFragment}
`;

export const getProductQuery = /* GraphQL */ `
    query getProduct($handle: String!) {
        product(handle: $handle) {
            ...product
        }
    }
    ${productFragment}
`;
