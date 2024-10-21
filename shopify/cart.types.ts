import { Connection, Image, Money } from 'shopify/types';

type CartProduct = {
    id: string;
    handle: string;
    title: string;
    featuredImage: Image;
    images?: {
        edges: {
            node: Image;
        }[];
    };
};

export type CartItem = {
    id: string | undefined;
    quantity: number;
    cost: {
        totalAmount: Money;
    };
    merchandise: {
        id: string;
        title: string;
        selectedOptions: {
            name: string;
            value: string;
        }[];
        product: CartProduct;
    };
};

export type ShopifyCart = {
    id: string | undefined;
    checkoutUrl: string;
    cost: {
        subtotalAmount: Money;
        totalAmount: Money;
        totalTaxAmount: Money;
    };
    discountCodes: {
        applicable: boolean;
        code: string;
    }[];
    lines: Connection<CartItem>;
    totalQuantity: number;
};

export type Cart = Omit<ShopifyCart, 'lines'> & {
    lines: CartItem[];
};

export type ShopifyCartOperation = {
    data: {
        cart: ShopifyCart;
    };
    variables: {
        cartId: string;
    };
};

export type ShopifyCreateCartOperation = {
    data: { cartCreate: { cart: ShopifyCart } };
};

export type ShopifyAddToCartOperation = {
    data: {
        cartLinesAdd: {
            cart: ShopifyCart;
        };
    };
    variables: {
        cartId: string;
        lines: {
            merchandiseId: string;
            quantity: number;
        }[];
    };
};
