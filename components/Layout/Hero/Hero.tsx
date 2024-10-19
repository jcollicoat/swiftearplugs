import { FC } from 'react';
import styles from './Hero.module.scss';

export const Hero: FC = () => (
    <section className={styles.section}>
        <div className={styles.content}>
            <div className={styles.lockup}>
                <h1>
                    Dance, laugh
                    <br />
                    and live loudly.
                </h1>
                <span>Swift&nbsp;Earplugs have you covered.</span>
                <p>
                    Dive into the music with our high-fidelity earplugs designed
                    to deliver crystal clear sound, while protecting your
                    hearing for many years to come.
                </p>
            </div>
        </div>
    </section>
);
