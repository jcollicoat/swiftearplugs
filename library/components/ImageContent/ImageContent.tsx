import Image from 'next/image';
import { FC, PropsWithChildren } from 'react';
import styles from './ImageContent.module.scss';

export const ImageContent: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <Image src="https://picsum.photos/480/270" alt="" fill />
            </div>
            <div className={styles.content}>{children}</div>
        </div>
    );
};
