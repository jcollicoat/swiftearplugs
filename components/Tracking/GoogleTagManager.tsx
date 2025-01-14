import Script from 'next/script';
import { FC } from 'react';

const { GOOGLE_TAG_MANAGER_ID } = process.env;
const TRACKING_ENABLED = process.env.NEXT_PUBLIC_TRACKING_ENABLED === 'true';

export const GoogleTagManager: FC = () => {
    if (!TRACKING_ENABLED) return null;

    if (!GOOGLE_TAG_MANAGER_ID) {
        console.warn('No Google Tag Manager ID');
        return null;
    }

    return (
        <>
            <Script id="google-tag-manager" strategy="afterInteractive">
                {`
                    (function(w,d,s,l,i) {
                        w[l]=w[l]||[];
                        w[l].push({
                            'gtm.start': new Date().getTime(), event:'gtm.js'
                        });
                        var f=d.getElementsByTagName(s)[0], j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
                        j.async=true;
                        j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                        f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','${GOOGLE_TAG_MANAGER_ID}');
                `}
            </Script>
            <noscript>
                {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                <iframe
                    src={`https://www.googletagmanager.com/ns.html?id=${GOOGLE_TAG_MANAGER_ID}`}
                    height="0"
                    width="0"
                    style={{ display: 'none', visibility: 'hidden' }}
                ></iframe>
            </noscript>
        </>
    );
};
