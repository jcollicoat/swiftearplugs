import { Metadata } from 'next';
import { Carousel } from '@Layout/Carousel/Carousel';
import { Comparison } from '@Layout/Comparison/Comparison';
import { Hero } from '@Layout/Hero/Hero';
import { LayeredContent } from '@Layout/LayeredContent/LayeredContent';
import { QuoteSection } from '@Layout/QuoteSection/QuoteSection';
import styles from './page.module.scss';

export const metadata: Metadata = {
    title: 'Swift Earplugs',
    description: 'Swift Earplugs bring you closer to the music you love.',
};

export default function HomePage() {
    return (
        <>
            <Hero />
            <Carousel />
            <QuoteSection />
            <div className={styles.gradient}>
                <LayeredContent />
                <Comparison />
            </div>
        </>
    );
}
