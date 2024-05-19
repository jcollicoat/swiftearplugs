import { Metadata } from 'next';
import { Hero } from '@components/Hero/Hero';
import { Info } from '@components/Info/Info';
import { ProductTile } from '@components/ProductTile/ProductTile';

export const metadata: Metadata = {
    title: 'Swift Earplugs',
};

export default function HomePage() {
    return (
        <>
            <Hero />
            <ProductTile />
            <Info />
        </>
    );
}
