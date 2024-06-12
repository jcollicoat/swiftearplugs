import { Footer } from '@components/Footer/Footer';
import '@styles/layout.scss';

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
                <Footer />
            </body>
        </html>
    );
}
