import { useCallback, useEffect, useRef } from 'react';

export const useSwiping = (actionLeft: () => void, actionRight: () => void) => {
    const swiperRef = useRef<HTMLDivElement>(null);
    const touchXStart = useRef(0);
    const touchXEnd = useRef(0);

    const minimumSwipeDistance = 50;

    const handleAction = useCallback(() => {
        const distance = touchXStart.current - touchXEnd.current;
        if (distance > 0) {
            // Swipe left
            distance > minimumSwipeDistance && actionLeft();
        } else {
            // Swipe right
            distance * -1 > minimumSwipeDistance && actionRight();
        }
    }, [actionLeft, actionRight]);

    const handleTouchStart = (event: TouchEvent) => {
        touchXStart.current = event.targetTouches[0].clientX;
    };

    const handleTouchEnd = useCallback(
        (event: TouchEvent) => {
            touchXEnd.current = event.changedTouches[0].clientX;
            handleAction();
        },
        [handleAction],
    );

    useEffect(() => {
        const element = swiperRef.current;
        if (!element) return;

        element.addEventListener('touchstart', handleTouchStart);
        element.addEventListener('touchend', handleTouchEnd);

        return () => {
            element.removeEventListener('touchstart', handleTouchStart);
            element.removeEventListener('touchend', handleTouchEnd);
        };
    }, [handleTouchEnd]);

    return { swiperRef };
};
