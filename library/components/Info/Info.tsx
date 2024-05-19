import { FC } from 'react';
import { Product } from '@components/Product/Product';
import styles from './Info.module.scss';

export const Info: FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.tile}>
                <Product />
            </div>
            <div className={styles.info}>
                <div className={styles.copy}>
                    <h2>Experience clarity, not&nbsp;noise.</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                </div>
                <ul className={styles.items}>
                    <li className={styles.item}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            alt=""
                            src="https://picsum.photos/160/160"
                            className={styles.icon}
                        />
                        Up to 17dB of noise reduction
                    </li>
                    <li className={styles.item}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            alt=""
                            src="https://picsum.photos/160/160"
                            className={styles.icon}
                        />
                        Designed for a secure fit
                    </li>
                    <li className={styles.item}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            alt=""
                            src="https://picsum.photos/160/160"
                            className={styles.icon}
                        />
                        Reusable and simple to clean
                    </li>
                    <li className={styles.item}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            alt=""
                            src="https://picsum.photos/160/160"
                            className={styles.icon}
                        />
                        Protect your hearing for years to come
                    </li>
                </ul>
            </div>
        </div>
    );
};
