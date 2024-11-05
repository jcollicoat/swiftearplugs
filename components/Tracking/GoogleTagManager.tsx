import Script from 'next/script';
import { FC, useCallback } from 'react';

const { GOOGLE_TAG_MANAGER_ID } = process.env;
const TRACKING_ENABLED = process.env.NEXT_PUBLIC_TRACKING_ENABLED === 'true';

interface WindowWithGtag extends Window {
    gtag?: (event: 'event', name: string, data: unknown) => void;
}
declare const window: WindowWithGtag;

export const useGoogleTagManager = () => {
    const trackGoogleEvent = useCallback((name: string, data: unknown) => {
        if (TRACKING_ENABLED && window.gtag) {
            window.gtag('event', name, data);
        }
    }, []);

    return { trackGoogleEvent };
};

export const GoogleTagManager: FC = () => {
    if (!TRACKING_ENABLED) return null;

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
