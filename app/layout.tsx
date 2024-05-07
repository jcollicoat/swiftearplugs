import type { Metadata } from 'next';
import '@styles/layout.scss';

export const metadata: Metadata = {};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="../public/favicon.ico" key="" />
            </head>
            <body>
                <main>{children}</main>
            </body>
        </html>
    );
}
