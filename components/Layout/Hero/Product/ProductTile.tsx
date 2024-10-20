import { getProduct } from 'shopify/product';
import styles from './ProductTile.module.scss';

export const ProductTile: React.FC = async () => {
    const product = await getProduct('swift-earplugs');

    return (
        <div className={styles.container}>
            <div className={styles.tile}>
                <div className={styles.selector}></div>
            </div>
        </div>
    );
};
