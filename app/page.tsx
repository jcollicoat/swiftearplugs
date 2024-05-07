import { Metadata } from 'next';
import { Hero } from '@components/Hero/Hero';
import { Product } from '@components/Product/Product';

export const metadata: Metadata = {
    title: 'Swift Earplugs',
};

export default function HomePage() {
    return (
        <>
            <Hero />
            <Product />
        </>
    );
}
