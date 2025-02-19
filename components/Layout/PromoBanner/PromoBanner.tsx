'use client';

import classNames from 'classnames';
import { FC, useState } from 'react';
import {
    PiCirclesThree,
    PiSealPercent,
    PiStar,
    PiTag,
    PiX,
} from 'react-icons/pi';
import { content } from 'content';
import styles from './PromoBanner.module.scss';

const Icon: FC<{ index: number }> = ({ index }) => {
    const props = { size: 24, className: styles.icon };

    switch (content.promo.variants[index].icon) {
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

interface Props {
    variant: string;
}

export const PromoBannerGated: FC<Props> = ({ variant }) => {
    const [isVisible, setIsVisible] = useState(true);

    const index = Number(variant);

    let textOne = content.promo.variants[index].text;
    let code: string | undefined = undefined;
    let textTwo: string | undefined = undefined;
    if (textOne.includes('{{ code }}')) {
        const split = textOne.split('{{ code }}');
        textOne = split[0];
        code = content.promo.variants[index].code;
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
                <Icon index={index} />
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

export const PromoBanner: FC<Props> = (props) => {
    if (!content.promo.enabled) return null;
    return <PromoBannerGated {...props} />;
};
