'use client';

import { FC } from 'react';
import { PiShoppingBag } from 'react-icons/pi';
import { useFacebookPixel } from '@Tracking/FacebookPixel';
import { content } from 'content';
import { useCart } from 'context/cart';
import { useModal } from 'context/modal';
import styles from './CartButton.module.scss';

export const CartButton: FC = () => {
    const { cart } = useCart();
    const { openModal } = useModal();
    const { trackCustomFacebookEvent } = useFacebookPixel();

    // TODO: extract this logic
    const cartHasItems = (cart?.totalQuantity ?? 0) > 0;
    const buttonDisabled = !cartHasItems;

    let text = content.header.buttonDisabled;
    let sub = undefined;
    if (cartHasItems) {
        text = content.header.button;
        sub = `${cart?.totalQuantity} ${cart?.totalQuantity === 1 ? 'item' : 'items'}`;
    }

    return (
        <button
            className={styles.button}
            onClick={() => {
                openModal();
                trackCustomFacebookEvent('ViewCart', {
                    cart: cart?.lines.map((line) => ({
                        id: line.merchandise.id,
                        quantity: line.quantity,
                    })),
                });
            }}
            disabled={buttonDisabled}
            aria-disabled={buttonDisabled}
        >
            <PiShoppingBag size={24} />
            <div className={styles.text}>
                <span
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{ __html: text }}
                />
                {sub && (
                    <span
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML={{ __html: sub }}
                        className={styles.subtext}
                    />
                )}
            </div>
        </button>
    );
};
