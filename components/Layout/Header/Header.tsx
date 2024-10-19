import Link from 'next/link';
import { Logo } from '@Generic/Logo/Logo';
import { CartButton } from './Cart/CartButton';
import styles from './Header.module.scss';

export const Header: React.FC = () => (
    <header className={styles.wrapper}>
        <div className={styles.bar}>
            <Link href="/" className={styles.logo}>
                <Logo />
            </Link>
            <CartButton />
        </div>
    </header>
);
