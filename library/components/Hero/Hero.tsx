import Image from 'next/image';
import { FC } from 'react';
import { Logo } from '@components/Logo/Logo';
import image from '@images/actionvance-eXVd7gDPO9A-unsplash.jpg';
import styles from './Hero.module.scss';

export const Hero: FC = () => {
    return (
        <div className={styles.hero}>
            <Image className={styles.image} src={image.src} fill alt="" />
            <Logo />
            <h1>
                Dance, laugh, and live loudly; Swift&nbsp;Earplugs have got you
                covered.
            </h1>
            <p>
                Dive into the music with our high-fidelity earplugs designed to
                deliver crystal clear sound, while protecting your hearing for
                many years to come.
            </p>
        </div>
    );
};
