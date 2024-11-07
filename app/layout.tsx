/* eslint-disable @next/next/no-page-custom-font */ // TODO: Remove need for this suppression
import './layout.scss';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Metadata } from 'next';
import { cookies } from 'next/headers';
import { Footer } from '@Layout/Footer/Footer';
import { Header } from '@Layout/Header/Header';
import { PromoBanner } from '@Layout/PromoBanner/PromoBanner';
import { FacebookPixel } from '@Tracking/FacebookPixel';
import { GoogleTagManager } from '@Tracking/GoogleTagManager';
import { MicrosoftClarity } from '@Tracking/MicrosoftClarity';
import { content } from 'content';
import { CartProvider } from 'context/cart';
import { ModalProvider } from 'context/modal';
import { getCart } from 'shopify/cart';

const { VERCEL_PROJECT_PRODUCTION_URL } = process.env;
const baseUrl = VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3001';

export const metadata: Metadata = {
    metadataBase: new URL(baseUrl),
    title: {
        default: content.meta.title,
        template: `%s | ${content.meta.title}`,
    },
    description: content.meta.description,
    robots: {
        follow: true,
        index: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const cartId = cookies().get('cartId')?.value;

    // Don't await the fetch, pass the Promise to the context provider
    const cart = getCart(cartId);

    return (
        <html lang="en">
            <head>
                <link rel="icon" href="./favicon.ico" key="" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&family=Figtree:ital,wght@0,300..900;1,300..900&display=swap"
                    rel="stylesheet"
                />
                <link rel="preconnect" href="https://cdn.shopify.com" />
            </head>
            <body>
                <CartProvider cartPromise={cart}>
                    <ModalProvider>
                        <Header />
                        <main>{children}</main>
                        <Footer />
                        <PromoBanner />
                    </ModalProvider>
                </CartProvider>
                <Analytics />
                <SpeedInsights />
                <FacebookPixel />
                <GoogleTagManager />
                <MicrosoftClarity />
            </body>
        </html>
    );
}
