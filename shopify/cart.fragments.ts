import { productFragment } from './product.fragments';

const cartFragment = /* GraphQL */ `
    fragment cart on Cart {
        id
        checkoutUrl
        cost {
            subtotalAmount {
                amount
                currencyCode
            }
            totalAmount {
                amount
                currencyCode
            }
            totalTaxAmount {
                amount
                currencyCode
            }
        }
        discountCodes {
            applicable
            code
        }
        lines(first: 100) {
            edges {
                node {
                    id
                    quantity
                    cost {
                        totalAmount {
                            amount
                            currencyCode
                        }
                    }
                    merchandise {
                        ... on ProductVariant {
                            id
                            title
                            selectedOptions {
                                name
                                value
                            }
                            product {
                                ...product
                            }
                        }
                    }
                }
            }
        }
        totalQuantity
    }
    ${productFragment}
`;

export const getCartQuery = /* GraphQL */ `
    query getCart($cartId: ID!) {
        cart(id: $cartId) {
            ...cart
        }
    }
    ${cartFragment}
`;

export const addToCartMutation = /* GraphQL */ `
    mutation addToCart($cartId: ID!, $lines: [CartLineInput!]!) {
        cartLinesAdd(cartId: $cartId, lines: $lines) {
            cart {
                ...cart
            }
        }
    }
    ${cartFragment}
`;
