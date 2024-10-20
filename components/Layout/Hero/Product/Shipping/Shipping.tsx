import { FC } from 'react';
import { PiPackage } from 'react-icons/pi';
import styles from './Shipping.module.scss';

export const Shipping: FC = () => (
    <div className={styles.wrapper}>
        <PiPackage size={24} />
        <span>Free delivery on all orders</span>
    </div>
);
