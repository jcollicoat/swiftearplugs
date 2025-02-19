import { type NextRequest, NextResponse } from 'next/server';
import { content } from 'content';

const ONE_DAY_MS = 1000 * 60 * 60 * 24;
const PROMO_SPLIT = 1 / content.promo.variants.length;
export const PROMO_COOKIE = 'promoVariant';

export function middleware(request: NextRequest) {
    if (!request.cookies.get(PROMO_COOKIE)) {
        const variant = `${Math.floor(Math.random() / PROMO_SPLIT)}`;

        const response = NextResponse.next();
        response.cookies.set(PROMO_COOKIE, variant, {
            expires: Date.now() + ONE_DAY_MS,
        });
        // Set header for consumption in layout.tsx on first load
        response.headers.set(PROMO_COOKIE, variant);

        return response;
    }

    return NextResponse.next();
}
