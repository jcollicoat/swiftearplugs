'use client';

import classNames from 'classnames';
import Image from 'next/image';
import { FC } from 'react';
import { useProduct } from 'context/product';
import { Image as ImageType } from 'shopify/types';
import styles from './Images.module.scss';

interface Props {
    images: ImageType[];
}

export const Images: FC<Props> = ({ images }) => {
    const { state } = useProduct();

    return (
        <div className={styles.image}>
            <Image
                src="/product-fallback.png"
                alt="Rose Gold"
                fill
                className={styles.fallback}
            />
            {images.map((image) => (
                <Image
                    key={image.url}
                    src={image.url}
                    alt={image.altText}
                    fill
                    className={classNames(
                        image.altText.includes(state['color']) &&
                            styles.visible,
                    )}
                />
            ))}
        </div>
    );
};
