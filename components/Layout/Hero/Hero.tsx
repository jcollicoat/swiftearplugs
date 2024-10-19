import Image from 'next/image';
import { FC } from 'react';
import styles from './Hero.module.scss';
import { ProductTile } from './Product/ProductTile';

export const Hero: FC = () => (
    <section className={styles.section}>
        <div className={styles.content}>
            <div className={styles.lockup}>
                <h1>
                    Dance, laugh
                    <br />
                    and live loudly.
                    <Image
                        src="/pinks-1.png"
                        alt=""
                        height={204 / 2}
                        width={224 / 2}
                        className={styles.float1}
                    />
                    <Image
                        src="/pinks-2.png"
                        alt=""
                        width={194 / 2}
                        height={228 / 2}
                        className={styles.float2}
                    />
                </h1>
                <span>
                    Swift&nbsp;Earplugs have you covered.
                    <Image
                        src="/black-1.png"
                        alt=""
                        width={100 / 2}
                        height={100 / 2}
                        className={styles.float}
                    />
                </span>
                <p>
                    Dive into the music with our high-fidelity earplugs designed
                    to deliver crystal clear sound, while protecting your
                    hearing for many years to come.
                    <Image
                        src="/case-purple-1.png"
                        alt=""
                        width={819 / 2}
                        height={819 / 2}
                        className={styles.float}
                    />
                </p>
            </div>
            <ProductTile />
        </div>
    </section>
);
