import dynamic from 'next/dynamic';
import { FC } from 'react';
import styles from './Product.module.scss';

const ProductLoader = dynamic(() => import('./ProductLoader'), {
    ssr: false,
});

export const Product: FC = () => {
    return (
        <div className={styles.buy}>
            <ProductLoader />
        </div>
    );
};
