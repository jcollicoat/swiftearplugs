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
                src="/product-fallback.png"
                alt="Swift Earplugs"
                fill
                className={classNames(
                    styles.fallback,
                    noVariantSelected && styles.visible,
                )}
                priority
            />
            {product.variants.map((variant) => (
                // Not using Next Image here so Vercel doesn't cache images which may be updated in Shopify
                // eslint-disable-next-line @next/next/no-img-element
                <img
                    key={variant.id}
                    src={variant.image.url}
                    alt={variant.image.altText ?? ''}
                    className={classNames(
                        state.color === variant.title && styles.visible,
                    )}
                    loading="lazy"
                />
            ))}
        </div>
    );
};
