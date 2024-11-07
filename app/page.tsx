import { Carousel } from '@Layout/Carousel/Carousel';
import { Comparison } from '@Layout/Comparison/Comparison';
import { Hero } from '@Layout/Hero/Hero';
import { ImageTile } from '@Layout/ImageTile/ImageTile';
import { LayeredContent } from '@Layout/LayeredContent/LayeredContent';
import { QuoteSection } from '@Layout/QuoteSection/QuoteSection';
import styles from './page.module.scss';

export default function HomePage() {
    return (
        <>
            <Hero />
            <ImageTile />
            <Carousel />
            <QuoteSection />
            {/* TODO: Gradient wrapper component */}
            <div className={styles.gradient}>
                <LayeredContent />
                <Comparison />
            </div>
        </>
    );
}
