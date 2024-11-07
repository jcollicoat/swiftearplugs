'use client';

import classNames from 'classnames';
import { FC, useEffect, useState } from 'react';
import {
    PiCirclesThree,
    PiSealPercent,
    PiStar,
    PiTag,
    PiX,
} from 'react-icons/pi';
import { content } from 'content';
import styles from './PromoBanner.module.scss';

const Icon: FC = () => {
    const props = { size: 24, className: styles.icon };

    switch (content.promo.icon) {
        case 'percent':
            return <PiSealPercent {...props} />;
        case 'b2g1f':
            return <PiCirclesThree {...props} />;
        case 'sale':
            return <PiTag {...props} />;
        default:
            return <PiStar {...props} />;
    }
};

export const PromoBanner: FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (content.promo.enabled) {
            setIsVisible(true);
        }
    }, []);

    if (!content.promo.enabled) return null;

    let textOne = content.promo.text;
    let code: string | undefined = undefined;
    let textTwo: string | undefined = undefined;
    if (content.promo.text.includes('{{ code }}')) {
        const split = content.promo.text.split('{{ code }}');
        textOne = split[0];
        code = content.promo.code;
        textTwo = split[1];
    }

    return (
        <aside className={styles.wrapper}>
            <div
                className={classNames(
                    styles.banner,
                    isVisible && styles.isVisible,
                )}
            >
                <Icon />
                <span className={styles.text}>
                    {textOne}{' '}
                    {code && <span className={styles.code}>{code}</span>}{' '}
                    {textTwo}
                </span>
                <button
                    className={styles.close}
                    onClick={() => setIsVisible(false)}
                >
                    <PiX size={20} />
                </button>
            </div>
        </aside>
    );
};
