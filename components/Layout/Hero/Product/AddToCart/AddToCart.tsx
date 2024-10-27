'use client';

import classNames from 'classnames';
import { FC } from 'react';
import { useFormState } from 'react-dom';
import { SRAnnounce } from '@Generic/SRAnnounce/SRAnnounce';
import { content } from 'content';
import { useCart } from 'context/cart';
import { useProduct } from 'context/product';
import { addItem } from 'shopify/cart.actions';
import { Product, ProductVariant } from 'shopify/product.types';
import styles from './AddToCart.module.scss';

interface Props {
    product: Product;
}

export const AddToCart: FC<Props> = ({ product }) => {
    const { state } = useProduct();
    const { addCartItem } = useCart();
    const [message, formAction] = useFormState(addItem, null);

    const { variants } = product;
    const variant = variants.find((variant: ProductVariant) =>
        variant.selectedOptions.every(
            (option) => option.value === state[option.name.toLowerCase()],
        ),
    );
    const defaultVariantId =
        variants.length === 1 ? variants[0]?.id : undefined;
    const selectedVariantId = variant?.id || defaultVariantId;
    const finalVariant = variants.find(
        (variant) => variant.id === selectedVariantId,
    );

    const actionWithVariant = formAction.bind(null, selectedVariantId);

    const price =
        finalVariant?.price.amount ?? product.priceRange.minVariantPrice.amount;
    const compareAtPrice = finalVariant?.compareAtPrice?.amount;
    const discount = compareAtPrice
        ? Math.round(
              ((Number(compareAtPrice) - Number(price)) /
                  Number(compareAtPrice)) *
                  100,
          )
        : undefined;

    const buttonDisabled = !finalVariant?.availableForSale;

    return (
        <form
            className={styles.wrapper}
            action={async () => {
                if (!finalVariant) return;
                addCartItem(finalVariant, product);
                await actionWithVariant();
                // TODO: track add to cart
            }}
        >
            <div className={styles.price}>
                {compareAtPrice && (
                    <span className={styles.old}>
                        <span>Was </span>
                        {`$${compareAtPrice}0`}
                    </span>
                )}
                <span
                    className={classNames(
                        styles.current,
                        discount && styles.isDiscounted,
                    )}
                >
                    <span>{`$${price}0`}</span>
                    {discount && (
                        <span
                            className={styles.discount}
                        >{` ${discount}% off`}</span>
                    )}
                </span>
            </div>
            <button
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                    __html: buttonDisabled
                        ? content.product.buttonDisabled
                        : content.product.button,
                }}
                disabled={buttonDisabled}
                aria-disabled={buttonDisabled}
            />
            <SRAnnounce message={message} />
        </form>
    );
};
