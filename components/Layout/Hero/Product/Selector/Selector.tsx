'use client';

import classNames from 'classnames';
import { FC, useEffect } from 'react';
import { useProduct, useUpdateURL } from 'context/product';
import { ProductVariant } from 'shopify/product.types';
import styles from './Selector.module.scss';

interface Props {
    variants: ProductVariant[];
}

export const Selector: FC<Props> = ({ variants }) => {
    const { state, updateOption } = useProduct();
    const { updateURL } = useUpdateURL();

    useEffect(() => {
        if (!state.color) {
            const firstAvailable = variants.find(
                (variant) => variant.availableForSale,
            );
            updateURL({ color: firstAvailable?.title ?? '' });
        }
    }, [state.color, updateURL, variants]);

    return (
        <form className={styles.selector}>
            {variants.map((variant) => {
                // TODO: extract this logic
                const color = variant.title.split(' ')[1].toLowerCase();
                const isUnavailable = !variant.availableForSale;
                const isSelected = state.color === variant.title;

                return (
                    <button
                        key={variant.id}
                        formAction={() => {
                            const newState = updateOption(
                                'color',
                                variant.title,
                            );
                            updateURL(newState);
                        }}
                        className={classNames(
                            styles[color],
                            isSelected && styles.isSelected,
                        )}
                        disabled={isUnavailable}
                        aria-disabled={isUnavailable}
                        title={`${variant.title} ${isUnavailable ? ' (Out of stock)' : ''}`}
                    >
                        <span>
                            {variant.title}
                            {isUnavailable && (
                                <span className={styles.outOfStock}>
                                    Out of stock
                                </span>
                            )}
                        </span>
                    </button>
                );
            })}
        </form>
    );
};
