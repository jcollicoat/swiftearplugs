import { FC } from 'react';
import { Logo } from '@components/Logo/Logo';
import styles from './Footer.module.scss';

export const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <Logo />
        </footer>
    );
};
