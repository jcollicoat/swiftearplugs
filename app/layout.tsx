/* eslint-disable @next/next/no-page-custom-font */
import './layout.scss';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
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
                    href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body>
                <main>{children}</main>
            </body>
        </html>
    );
}
