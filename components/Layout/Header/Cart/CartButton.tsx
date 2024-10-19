'use client';

import { FC } from 'react';
import { PiShoppingBag } from 'react-icons/pi';
import styles from './CartButton.module.scss';

export const CartButton: FC = () => {
    const text = 'Checkout';
    const sub = '2 items';

    return (
        <button className={styles.button} onClick={() => alert('Clicked!')}>
            <PiShoppingBag size={24} />
            <div className={styles.text}>
                <span>{text}</span>
                <span className={styles.subtext}>{sub}</span>
            </div>
        </button>
    );
};
