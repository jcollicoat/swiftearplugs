import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import styles from './NotFound.module.scss';

export const NotFound: FC = () => (
    <section className={styles.section}>
        <div className={styles.content}>
            <Image src="/pinks-1.png" alt="" width={224 / 2} height={204 / 2} />
            <h1>404</h1>
            <p>Sorry, this page could not be found.</p>
            <Link href="/">Return Home</Link>
        </div>
    </section>
);
