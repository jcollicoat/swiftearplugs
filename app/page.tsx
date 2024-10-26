import { Metadata } from 'next';
import { Carousel } from '@Layout/Carousel/Carousel';
import { Hero } from '@Layout/Hero/Hero';

export const metadata: Metadata = {
    title: 'Swift Earplugs',
    description: 'Swift Earplugs bring you closer to the music you love.',
};

export default function HomePage() {
    return (
        <>
            <Hero />
            <Carousel />
        </>
    );
}
