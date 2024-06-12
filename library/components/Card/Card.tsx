import Image from 'next/image';
import { CSSProperties, FC, PropsWithChildren } from 'react';
import styles from './Card.module.scss';

interface Props {
    image: string;
    position?: CSSProperties['objectPosition'];
}

export const Card: FC<PropsWithChildren<Props>> = ({
    image,
    position,
    children,
}) => {
    return (
        <div className={styles.card}>
            <div className={styles.image}>
                <Image
                    src={image}
                    alt=""
                    fill
                    style={{
                        objectFit: 'cover',
                        objectPosition: position ?? 'auto 50%',
                    }}
                />
            </div>
            {children}
        </div>
    );
};
