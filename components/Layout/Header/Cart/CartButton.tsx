'use client';

import { FC } from 'react';
import styles from './CartButton.module.scss';

export const CartButton: FC = () => {
    const text = 'Cart Empty';

    return (
        <button className={styles.button} onClick={() => alert('Clicked!')}>
            {text}
        </button>
    );
};
