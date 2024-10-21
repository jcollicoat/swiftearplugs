'use client';

import classNames from 'classnames';
import Image from 'next/image';
import { FC } from 'react';
import { useProduct } from 'context/product';
import { Product } from 'shopify/product.types';
import styles from './Images.module.scss';

interface Props {
    product: Product;
}

export const Images: FC<Props> = ({ product }) => {
    const { state } = useProduct();

    const noVariantSelected = !state.color;

    return (
        <div className={styles.image}>
            <Image
                src={product.featuredImage?.url ?? '/product-fallback.png'}
                alt="Rose Gold"
                fill
                className={classNames(
                    styles.fallback,
                    noVariantSelected && styles.visible,
                )}
            />
            {product.variants.map((variant) => (
                <Image
                    key={variant.id}
                    src={variant.image.url}
                    alt={variant.image.altText}
                    fill
                    className={classNames(
                        state.color === variant.title && styles.visible,
                    )}
                />
            ))}
        </div>
    );
};
