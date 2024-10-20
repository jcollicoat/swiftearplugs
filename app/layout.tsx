/* eslint-disable @next/next/no-page-custom-font */
import './layout.scss';
import { cookies } from 'next/headers';
import { Header } from '@Layout/Header/Header';
import { getCart } from 'shopify/cart';

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
            </head>
            <body>
                <Header />
                <main>{children}</main>
            </body>
        </html>
    );
}
