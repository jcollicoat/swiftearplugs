import Script from 'next/script';
import { FC } from 'react';

const { GTM_ID } = process.env;

export const GoogleTagManager: FC = () => {
    if (!GTM_ID) return null;

    return (
        <>
            <Script
                id="gtag-init"
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`}
            />
            <Script id="gtag-track" strategy="afterInteractive">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){
                    dataLayer.push(arguments);
                }
                gtag('js', new Date());
                gtag('config', '${GTM_ID}');
            `}
            </Script>
        </>
    );
};
