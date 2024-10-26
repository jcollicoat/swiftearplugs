'use client';

import { FC, useEffect } from 'react';
import { PiXCircle } from 'react-icons/pi';
import { Modal } from '@Generic/Modal/Modal';
import { useCart } from 'context/cart';
import { useModal } from 'context/modal';
import { createCartAndSetCookie } from 'shopify/cart.actions';
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

    const cartIsEmpty = cart.totalQuantity === 0;

    return (
        <Modal align="right">
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <h2>My Cart</h2>
                    <button className={styles.close} onClick={closeModal}>
                        <PiXCircle />
                    </button>
                </div>
                {cartIsEmpty
                    ? 'Empty cart...'
                    : cart.lines.map((item) => (
                          <CartItem key={item.merchandise.id} item={item} />
                      ))}
            </div>
        </Modal>
    );
};
