'use client';

import { FC } from 'react';
import { PiShoppingBag } from 'react-icons/pi';
import { content } from 'content';
import { useCart } from 'context/cart';
import { useModal } from 'context/modal';
import styles from './CartButton.module.scss';

export const CartButton: FC = () => {
    const { cart } = useCart();
    const { isOpen, setIsOpen } = useModal();

    const cartHasItems = (cart?.totalQuantity ?? 0) > 0;
    const buttonDisabled = !cartHasItems;

    let text = content.header.buttonDisabled;
    let sub = undefined;
    if (cartHasItems) {
        text = content.header.button;
        sub = `${cart?.totalQuantity} items`;
    }

    return (
        <button
            className={styles.button}
            onClick={() => setIsOpen(!isOpen)}
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
