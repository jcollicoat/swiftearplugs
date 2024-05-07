import { Metadata } from 'next';
import { Hero } from '@components/Hero/Hero';

export const metadata: Metadata = {
    title: 'Swift Earplugs',
};

export default function HomePage() {
    return <Hero />;
}
