'use client';

import classNames from 'classnames';
import { FC, useEffect } from 'react';
import { PiArrowRight, PiXCircle } from 'react-icons/pi';
import { Modal } from '@Generic/Modal/Modal';
import { Price } from '@Generic/Price/Price';
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
                    <h2>Your Cart</h2>
                    <button className={styles.close} onClick={closeModal}>
                        <PiXCircle />
                    </button>
                </div>
                {cart.lines.map((item) => (
                    <CartItem key={item.merchandise.id} item={item} />
                ))}
                <form
                    action={redirectToCheckout}
                    className={classNames(
                        styles.footer,
                        cartIsEmpty && styles.disabled,
                    )}
                >
                    <div className={styles.details}>
                        <span className={styles.total}>Total Price:</span>
                        <span className={styles.price}>
                            <Price price={cart.cost.totalAmount.amount} />
                        </span>
                    </div>
                    <button
                        className={styles.checkout}
                        disabled={cartIsEmpty}
                        aria-disabled={cartIsEmpty}
                    >
                        <span>{cartIsEmpty ? 'Empty Cart' : 'Checkout'}</span>
                        {!cartIsEmpty && <PiArrowRight size={24} />}
                    </button>
                </form>
            </div>
        </Modal>
    );
};
