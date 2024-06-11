import Image from 'next/image';
import { FC, PropsWithChildren } from 'react';
import styles from './Card.module.scss';

export const Card: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className={styles.card}>
            <div className={styles.image}>
                <Image
                    src="https://picsum.photos/480/240"
                    alt=""
                    fill
                    objectFit="cover"
                />
            </div>
            {children}
        </div>
    );
};
