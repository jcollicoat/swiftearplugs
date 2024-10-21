'use client';

import { PiShoppingBag } from 'react-icons/pi';
import { useCart } from 'context/cart';
import { useModal } from 'context/modal';
import styles from './CartButton.module.scss';

export const CartButton: React.FC = () => {
    const { cart } = useCart();
    const { isOpen, setIsOpen } = useModal();

    const cartHasItems = (cart?.totalQuantity ?? 0) > 0;
    const buttonDisabled = !cartHasItems;

    let text = 'Cart Empty';
    let sub = undefined;
    if (cartHasItems) {
        text = 'Checkout';
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
                <span>{text}</span>
                <span className={styles.subtext}>{sub}</span>
            </div>
        </button>
    );
};
