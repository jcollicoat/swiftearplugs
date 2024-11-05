'use client';

import classNames from 'classnames';
import { FC, useEffect } from 'react';
import { PiArrowRight, PiXCircle } from 'react-icons/pi';
import { Delivery } from '@Generic/Delivery/Delivery';
import { Modal } from '@Generic/Modal/Modal';
import { Price } from '@Generic/Price/Price';
import { useFacebookPixel } from '@Tracking/FacebookPixel';
import { useGoogleTagManager } from '@Tracking/GoogleTagManager';
import { useMicrosoftClarity } from '@Tracking/MicrosoftClarity';
import { content } from 'content';
import { useCart } from 'context/cart';
import { useModal } from 'context/modal';
import {
    createCartAndSetCookie,
    redirectToCheckout,
} from 'shopify/cart.actions';
import { CartItem } from './CartItem';
import styles from './CartModal.module.scss';

export const CartModal: FC = () => {
    const { closeModal } = useModal();
    const { cart } = useCart();
    const { trackFacebookEvent } = useFacebookPixel();
    const { trackGoogleEvent } = useGoogleTagManager();
    const { trackClarityEvent } = useMicrosoftClarity();

    useEffect(() => {
        if (!cart) {
            createCartAndSetCookie();
        }
    }, [cart]);

    if (!cart) return null;

    // TODO: extract this logic
    const cartIsEmpty = cart.totalQuantity === 0;

    return (
        <Modal align="right">
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <h2>{content.header.cart.heading}</h2>
                    <button className={styles.close} onClick={closeModal}>
                        <PiXCircle />
                    </button>
                </div>
                {cart.lines.map((item) => (
                    <CartItem key={item.merchandise.id} item={item} />
                ))}
                {!cartIsEmpty && <Delivery />}
                <form
                    action={() => {
                        trackFacebookEvent('InitiateCheckout', {
                            contents: cart.lines.map((line) => ({
                                id: line.merchandise.id,
                                quantity: line.quantity,
                            })),
                            num_items: cart.totalQuantity,
                            value: Number(cart.cost.totalAmount.amount),
                            currency: 'NZD',
                        });
                        trackGoogleEvent('initiate_checkout', {
                            cart: cart.lines.map((line) => ({
                                id: line.merchandise.id,
                                quantity: line.quantity,
                            })),
                            totalQuantity: cart.totalQuantity,
                            value: Number(cart.cost.totalAmount.amount),
                            currency: 'NZD',
                        });
                        trackClarityEvent('Initiate Checkout');
                        redirectToCheckout();
                    }}
                    className={classNames(
                        styles.footer,
                        cartIsEmpty && styles.disabled,
                    )}
                >
                    <div className={styles.details}>
                        <span className={styles.total}>
                            {content.header.cart.priceLabel}
                        </span>
                        <span className={styles.price}>
                            <Price price={cart.cost.totalAmount.amount} />
                        </span>
                    </div>
                    <button
                        className={styles.checkout}
                        disabled={cartIsEmpty}
                        aria-disabled={cartIsEmpty}
                    >
                        <span>
                            {cartIsEmpty
                                ? content.header.cart.checkoutDisabled
                                : content.header.cart.checkout}
                        </span>
                        {!cartIsEmpty && <PiArrowRight size={24} />}
                    </button>
                </form>
            </div>
        </Modal>
    );
};
