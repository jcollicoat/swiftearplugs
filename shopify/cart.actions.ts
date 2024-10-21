'use server';

import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';
import { addToCart, createCart, getCart, removeFromCart } from './cart';
import { TAGS } from './constants';

export async function createCartAndSetCookie() {
    const cart = await createCart();
    cookies().set('cartId', cart.id!);
}

export async function addItem(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    prevState: any,
    selectedVariantId: string | undefined,
) {
    const cartId = cookies().get('cartId')?.value;

    if (!cartId || !selectedVariantId) {
        return 'Error adding item to cart';
    }

    try {
        await addToCart(cartId, [
            { merchandiseId: selectedVariantId, quantity: 1 },
        ]);
        revalidateTag(TAGS.cart);
    } catch (e) {
        return 'Error adding item to cart';
    }
}

export async function removeItem(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    prevState: any,
    merchandiseId: string,
) {
    const cartId = cookies().get('cartId')?.value;

    if (!cartId) {
        return 'Missing cart ID';
    }

    try {
        const cart = await getCart(cartId);

        if (!cart) {
            return 'Error fetching cart';
        }

        const lineItem = cart.lines.find(
            (line) => line.merchandise.id === merchandiseId,
        );

        if (lineItem && lineItem.id) {
            await removeFromCart(cartId, [lineItem.id]);
            revalidateTag(TAGS.cart);
        } else {
            return 'Item not found in cart';
        }
    } catch (e) {
        return 'Error removing item from cart';
    }
}
