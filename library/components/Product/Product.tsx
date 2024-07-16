import { FC } from 'react';
import { IconContent } from '@components/IconContent/IconContent';
import styles from './Product.module.scss';

export const Product: FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.placeholder}></div>
            <div className={styles.content}>
                <h2>Feel the music, not noise.</h2>
                <ul>
                    <IconContent
                        icon="Check"
                        heading="Up to 17dB noise reduction"
                        content="Enjoy the music you love at a volume that loves you
                        back. Our advanced earplugs allow you to hear every
                        beat and lyric clearly without damaging your
                        hearing."
                        style="inline"
                    />
                    <IconContent
                        icon="Check"
                        heading="Long-lasting protection"
                        content="Crafted from durable materials, Swift Earplugs
                        protect your hearing during countless nights out –
                        because the best nights should never end in ringing
                        ears."
                        style="inline"
                    />
                    {/* <IconContent
                        icon="Colors"
                        heading="A pop of colour to suit your style"
                        content="Select from Rose Gold, Lilac Purple, or Matte
                        Black to accessorise your outfit. Swift Earplugs
                        aren’t just functional—they’re fashionable."
                        style="inline"
                    /> */}
                </ul>
            </div>
        </div>
    );
};
