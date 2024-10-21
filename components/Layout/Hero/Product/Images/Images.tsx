import Image from 'next/image';
import { FC } from 'react';
import styles from './Images.module.scss';

export const Images: FC = () => (
    <div className={styles.image}>
        <Image src="/rose-gold-lockup.png" alt="Rose Gold" fill />
    </div>
);
