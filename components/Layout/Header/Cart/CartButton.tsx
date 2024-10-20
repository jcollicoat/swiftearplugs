'use client';

import { PiShoppingBag } from 'react-icons/pi';
import { useCart } from 'context/cart';
import styles from './CartButton.module.scss';

export const CartButton: React.FC = () => {
    const { cart } = useCart();

    const cartHasItems = (cart?.lines.length ?? 0) > 0;
    const buttonDisabled = !cartHasItems;

    let text = 'Cart Empty';
    let sub = undefined;
    if (cartHasItems) {
        text = 'Checkout';
        sub = '2 items';
    }

    return (
        <button
            className={styles.button}
            onClick={() => alert('Clicked!')}
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
