import Image from 'next/image';
import { CSSProperties, FC, PropsWithChildren } from 'react';
import styles from './ImageContent.module.scss';

interface Props {
    image: string;
    position?: CSSProperties['objectPosition'];
}

export const ImageContent: FC<PropsWithChildren<Props>> = ({
    image,
    position,
    children,
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <Image
                    src={image}
                    alt=""
                    fill
                    style={{
                        objectFit: 'cover',
                        objectPosition: position ?? '25% 80%',
                    }}
                />
            </div>
            <div className={styles.content}>{children}</div>
        </div>
    );
};
