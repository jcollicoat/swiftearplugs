'use client';

import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';
import { useModal } from 'context/modal';
import styles from './Modal.module.scss';
import { useClickOutside } from './useClickOutside';

interface Props {
    align?: 'left' | 'right';
}

export const Modal: FC<PropsWithChildren<Props>> = ({ children, align }) => {
    const { isOpen, closeModal } = useModal();
    const { modalRef } = useClickOutside(isOpen, closeModal);

    return (
        <div className={classNames(styles.background, isOpen && styles.isOpen)}>
            <div className={styles.wrapper}>
                <div
                    className={classNames(styles.modal, align && styles[align])}
                    ref={modalRef}
                >
                    <div className={styles.container}>{children}</div>
                </div>
            </div>
        </div>
    );
};
