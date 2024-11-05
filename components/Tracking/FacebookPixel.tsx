import Script from 'next/script';
import { FC, useCallback } from 'react';

const { FACEBOOK_PIXEL_ID } = process.env;
const TRACKING_ENABLED = process.env.NEXT_PUBLIC_TRACKING_ENABLED === 'true';

interface WindowWithFBQ extends Window {
    fbq?: (event: string, name: string, data: unknown) => void;
}
declare const window: WindowWithFBQ;

type CustomizeOrAddToCart = {
    content_ids: string[];
    content_type: string;
};

type InitiateCheckout = {
    contents: {
        id: string;
        quantity: number;
    }[];
    num_items: number;
    value: number;
    currency: string;
};

export const useFacebookPixel = () => {
    const trackFacebookEvent = useCallback(
        (name: string, data: CustomizeOrAddToCart | InitiateCheckout) => {
            if (TRACKING_ENABLED && window.fbq) {
                window.fbq('track', name, data);
            }
        },
        [],
    );

    const trackCustomFacebookEvent = useCallback(
        (name: string, data?: unknown) => {
            if (TRACKING_ENABLED && window.fbq) {
                window.fbq('trackCustom', name, data);
            }
        },
        [],
    );

    return { trackFacebookEvent, trackCustomFacebookEvent };
};

export const FacebookPixel: FC = () => {
    if (!TRACKING_ENABLED) return null;

    if (!FACEBOOK_PIXEL_ID) {
        console.warn('No Facebook Pixel ID');
        return null;
    }

    return (
        <>
            <Script id="facebook-pixel" strategy="afterInteractive">
                {`
                    !function(f,b,e,v,n,t,s){
                        if(f.fbq)return;
                        n=f.fbq=function(){
                            n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)
                        };
                        if(!f._fbq)f._fbq=n;
                        n.push=n;
                        n.loaded=!0;
                        n.version='2.0';
                        n.queue=[];
                        t=b.createElement(e);
                        t.async=!0;
                        t.src=v;
                        s=b.getElementsByTagName(e)[0];
                        s.parentNode.insertBefore(t,s)
                    }(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '${FACEBOOK_PIXEL_ID}');
                    fbq('track', 'PageView');
                `}
            </Script>
            <noscript>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    alt=""
                    height="1"
                    width="1"
                    style={{ display: 'none' }}
                    src={`https://www.facebook.com/tr?id=${FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1`}
                />
            </noscript>
        </>
    );
};
