import styles from './ProductTile.module.scss';

export const ProductTile: React.FC = () => (
    <div className={styles.container}>
        <div className={styles.tile}>
            <div className={styles.selector}></div>
        </div>
    </div>
);
