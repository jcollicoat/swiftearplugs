import { Metadata } from 'next';
import { Hero } from '@components/Hero/Hero';
import { Info } from '@components/Info/Info';

export const metadata: Metadata = {
    title: 'Swift Earplugs',
};

export default function HomePage() {
    return (
        <>
            <Hero />
            <Info />
        </>
    );
}
