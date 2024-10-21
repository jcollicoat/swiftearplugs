'use client';

import { FC } from 'react';
import { useFormState } from 'react-dom';
import { SRAnnounce } from '@Generic/SRAnnounce/SRAnnounce';
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

    const buttonDisabled = !finalVariant?.availableForSale;

    if (!finalVariant) return null;

    return (
        <form
            className={styles.wrapper}
            action={async () => {
                addCartItem(finalVariant, product);
                await actionWithVariant();
                // TODO: track add to cart
            }}
        >
            <div className={styles.price}>
                <span className={styles.old}>$39.90</span>
                <span className={styles.current}>$35.10</span>
                <span className={styles.discount}>10% off</span>
            </div>
            <button disabled={buttonDisabled} aria-disabled={buttonDisabled}>
                {buttonDisabled ? 'Out of Stock' : 'Add to Cart'}
            </button>
            <SRAnnounce message={message} />
        </form>
    );
};
