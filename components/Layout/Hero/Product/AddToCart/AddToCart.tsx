'use client';

import { FC } from 'react';
import { useProduct } from 'context/product';
import styles from './AddToCart.module.scss';

export const AddToCart: FC = () => {
    const product = useProduct();
    console.log(product);
    const buttonDisabled = false;

    return (
        <div className={styles.wrapper}>
            <div className={styles.price}>
                <span className={styles.old}>$39.90</span>
                <span className={styles.current}>$35.10</span>
                <span className={styles.discount}>10% off</span>
            </div>
            <button
                onClick={() => alert('Added!')}
                disabled={buttonDisabled}
                aria-disabled={buttonDisabled}
            >
                {buttonDisabled ? 'Out of Stock' : 'Add to Cart'}
            </button>
        </div>
    );
};
