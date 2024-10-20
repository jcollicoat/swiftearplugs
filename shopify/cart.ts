import { getCartQuery } from './cart.fragments';
import { Cart, ShopifyCart, ShopifyCartOperation } from './cart.types';
import { TAGS } from './constants';
import { shopifyFetch } from './fetch';
import { removeEdgesAndNodes } from './utils';

const reshapeCart = (cart: ShopifyCart): Cart => {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (!cart.cost.totalTaxAmount) {
        cart.cost.totalTaxAmount = {
            amount: '0.0',
            currencyCode: 'USD',
        };
    }

    return {
        ...cart,
        lines: removeEdgesAndNodes(cart.lines),
    };
};

export const getCart = async (
    cartId: string | undefined,
): Promise<Cart | undefined> => {
    if (!cartId) {
        return undefined;
    }

    const res = await shopifyFetch<ShopifyCartOperation>({
        query: getCartQuery,
        variables: { cartId },
        tags: [TAGS.cart],
    });

    // Old carts becomes `null` when you checkout.
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (!res.body.data.cart) {
        return undefined;
    }

    return reshapeCart(res.body.data.cart);
};
