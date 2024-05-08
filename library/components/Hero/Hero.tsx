import { FC } from 'react';
import styles from './Hero.module.scss';

export const Hero: FC = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.content}>
                <h1>
                    Swift&nbsp;Earplugs
                    <br />
                    bring you closer&nbsp;to&nbsp;the music&nbsp;you&nbsp;love.
                </h1>
            </div>
        </div>
    );
};
