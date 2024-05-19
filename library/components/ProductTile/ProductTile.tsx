import dynamic from 'next/dynamic';
import { FC } from 'react';
import styles from './ProductTile.module.scss';

const DynamicBuyNow = dynamic(() => import('../Product/Product'), {
    ssr: false,
});

export const ProductTile: FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.tile}>
                <div className={styles.buy}>
                    <DynamicBuyNow />
                </div>
            </div>
        </div>
    );
};
