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
                        <h3>Up to 17dB of noise reduction</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </p>
                    </li>
                    <li className={styles.item}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            alt=""
                            src="https://picsum.photos/160/160"
                            className={styles.icon}
                        />
                        <h3>Designed for a secure fit</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </p>
                    </li>
                    <li className={styles.item}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            alt=""
                            src="https://picsum.photos/160/160"
                            className={styles.icon}
                        />
                        <h3>Reusable and simple to clean</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </p>
                    </li>
                    <li className={styles.item}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            alt=""
                            src="https://picsum.photos/160/160"
                            className={styles.icon}
                        />
                        <h3>Protect your hearing for years to come</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};
