import { FC } from 'react';
import { PiPackage } from 'react-icons/pi';
import { content } from 'content';
import styles from './Delivery.module.scss';

export const Delivery: FC = () => (
    <div className={styles.wrapper}>
        <PiPackage size={24} />
        <span>{content.product.delivery}</span>
    </div>
);
