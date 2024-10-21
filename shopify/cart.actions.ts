'use server';

import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';
import { addToCart } from './cart';
import { TAGS } from './constants';

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
