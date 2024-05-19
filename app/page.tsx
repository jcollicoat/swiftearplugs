import { Metadata } from 'next';
import { Hero } from '@components/Hero/Hero';
import { Info } from '@components/Info/Info';

export const metadata: Metadata = {
    title: 'Swift Earplugs',
    description: 'Swift Earplugs bring you closer to the music you love.',
};

export default function HomePage() {
    return (
        <>
            <Hero />
            <Info />
        </>
    );
}
