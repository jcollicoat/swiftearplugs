import Script from 'next/script';
import { FC } from 'react';

const { GOOGLE_TAG_MANAGER_ID } = process.env;

export const GoogleTagManager: FC = () => {
    if (!GOOGLE_TAG_MANAGER_ID) {
        console.warn('No Google Tag Manager ID');
        return null;
    }

    return (
        <>
            <Script
                id="gtag-init"
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_MANAGER_ID}`}
            />
            <Script id="gtag-track" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){
                        dataLayer.push(arguments);
                    }
                    gtag('js', new Date());
                    gtag('config', '${GOOGLE_TAG_MANAGER_ID}');
                `}
            </Script>
        </>
    );
};