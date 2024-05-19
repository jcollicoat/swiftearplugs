import Image from 'next/image';
import { FC } from 'react';
import { Logo } from '@components/Logo/Logo';
import image from './actionvance-eXVd7gDPO9A-unsplash.jpg';
import styles from './Hero.module.scss';

export const Hero: FC = () => {
    return (
        <div className={styles.hero}>
            <Image className={styles.image} src={image.src} fill alt="" />
            <Logo />
            <h1>
                Swift&nbsp;Earplugs bring&nbsp;you&nbsp;closer to the
                music&nbsp;you&nbsp;love.
            </h1>
        </div>
    );
};
