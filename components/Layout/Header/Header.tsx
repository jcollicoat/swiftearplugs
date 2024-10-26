import Link from 'next/link';
import { FC } from 'react';
import { Logo } from '@Generic/Logo/Logo';
import { CartButton } from './Cart/CartButton';
import { CartModal } from './Cart/CartModal';
import styles from './Header.module.scss';

export const Header: FC = () => (
    <header className={styles.wrapper}>
        <div className={styles.bar}>
            <Link href="/" className={styles.logo}>
                <Logo />
            </Link>
            <CartButton />
        </div>
        <CartModal />
    </header>
);
