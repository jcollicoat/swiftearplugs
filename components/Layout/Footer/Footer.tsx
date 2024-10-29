import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { Logo } from '@Generic/Logo/Logo';
import styles from './Footer.module.scss';

export const Footer: FC = () => (
    <footer className={styles.footer}>
        <div className={styles.content}>
            <nav>
                <div className={styles.primary}>
                    <Link href="/" className={styles.logo}>
                        <Logo />
                    </Link>
                    <Link href="/#product" className={styles.link}>
                        Choose Your Colour
                    </Link>
                </div>
                <div className={styles.secondary}>
                    <Link href="/privacy-policy" className={styles.link}>
                        Privacy Policy
                    </Link>
                    <Link href="/terms-of-service" className={styles.link}>
                        Terms of Service
                    </Link>
                    <Link href="/returns-policy" className={styles.link}>
                        Returns Policy
                    </Link>
                </div>
            </nav>
            <Image
                src="/footer-lockup.png"
                alt=""
                width={553 / 2}
                height={532 / 2}
                className={styles.image}
            />
        </div>
    </footer>
);
