'use client';

import classNames from 'classnames';
import Image from 'next/image';
import { FC, Fragment, useEffect, useState } from 'react';
import { PiPauseCircle, PiPlayCircle } from 'react-icons/pi';
import { content } from 'content';
import styles from './Carousel.module.scss';
import { useSwiping } from './useSwiping';

// TODO: Break into smaller components
export const Carousel: FC = () => {
    const [slide, setSlide] = useState(0);
    const [playing, setPlaying] = useState(true);

    const previousSlide =
        slide === 0 ? content.carousel.items.length - 1 : slide - 1;
    const nextSlide =
        slide === content.carousel.items.length - 1 ? 0 : slide + 1;

    const { swiperRef } = useSwiping(
        () => setSlide(nextSlide),
        () => setSlide(previousSlide),
    );

    useEffect(() => {
        const carousel = setTimeout(() => {
            if (!playing) {
                return;
            }
            setSlide(nextSlide);
        }, 5000);

        return () => clearTimeout(carousel);
    }, [nextSlide, playing, slide]);

    return (
        <section
            className={classNames(
                styles.section,
                slide === 1 && styles.grey,
                slide === 3 && styles.purple,
            )}
        >
            <div className={styles.content}>
                <div className={styles.header}>
                    <h2
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML={{
                            __html: content.carousel.heading,
                        }}
                    />
                    <Image
                        src="/blacks-1.png"
                        alt=""
                        width={181 / 2}
                        height={183 / 2}
                        className={styles.float1}
                    />
                    <Image
                        src="/pinks-3.png"
                        alt=""
                        width={240 / 2}
                        height={163 / 2}
                        className={styles.float2}
                    />
                </div>
                <div className={styles.carousel} ref={swiperRef}>
                    <div className={styles.imageContainer}>
                        {content.carousel.items.map((item, index) => (
                            <Fragment key={item.heading}>
                                <Image
                                    src={`${item.image}-m.jpg`}
                                    alt=""
                                    width={1404 / 2}
                                    height={876 / 2}
                                    className={classNames(
                                        styles.image,
                                        styles.small,
                                        index === slide && styles.active,
                                    )}
                                />
                                <Image
                                    src={`${item.image}-d.jpg`}
                                    alt=""
                                    width={1404 / 2}
                                    height={876 / 2}
                                    className={classNames(
                                        styles.image,
                                        styles.large,
                                        index === slide && styles.active,
                                    )}
                                />
                            </Fragment>
                        ))}
                        <div className={styles.dots}>
                            {content.carousel.items.map((item, index) => (
                                <button
                                    key={item.heading}
                                    onClick={() => {
                                        setSlide(index);
                                    }}
                                    className={classNames(
                                        styles.dot,
                                        index === slide && styles.active,
                                        playing && styles.animated,
                                    )}
                                    tabIndex={index === slide ? -1 : 0}
                                    title={item.heading}
                                />
                            ))}
                        </div>
                        <button
                            className={styles.control}
                            onClick={() => setPlaying(!playing)}
                            title={playing ? 'Pause Carousel' : 'Play Carousel'}
                        >
                            {playing ? (
                                <PiPauseCircle size={30} />
                            ) : (
                                <PiPlayCircle size={30} />
                            )}
                        </button>
                    </div>
                    <div className={styles.items}>
                        {content.carousel.items.map((item, index) => (
                            <div
                                key={item.heading}
                                className={classNames(
                                    styles.item,
                                    index === slide && styles.active,
                                    index === previousSlide && styles.previous,
                                    index === nextSlide && styles.next,
                                )}
                            >
                                <h3
                                    // eslint-disable-next-line react/no-danger
                                    dangerouslySetInnerHTML={{
                                        __html: item.heading,
                                    }}
                                />
                                <p
                                    // eslint-disable-next-line react/no-danger
                                    dangerouslySetInnerHTML={{
                                        __html: item.content,
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
