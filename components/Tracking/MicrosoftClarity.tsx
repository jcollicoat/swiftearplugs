import Script from 'next/script';
import { FC } from 'react';

const { MICROSOFT_CLARITY_ID } = process.env;
const TRACKING_ENABLED = process.env.NODE_ENV === 'production';

export const MicrosoftClarity: FC = () => {
    if (!TRACKING_ENABLED) return null;

    if (!MICROSOFT_CLARITY_ID) {
        console.warn('No Microsoft Clarity ID');
        return null;
    }

    return (
        <Script id="ms_clarity" strategy="afterInteractive">
            {`
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){
                        (c[a].q=c[a].q||[]).push(arguments)
                    };
                    t=l.createElement(r);
                    t.async=1;
                    t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];
                    y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${MICROSOFT_CLARITY_ID}");
            `}
        </Script>
    );
};
