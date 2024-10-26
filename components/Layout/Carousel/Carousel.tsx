'use client';

import classNames from 'classnames';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import { content } from 'content';
import styles from './Carousel.module.scss';

export const Carousel: FC = () => {
    const [animate, setAnimate] = useState(true);
    const [slide, setSlide] = useState(0);

    const previousSlide =
        slide === 0 ? content.carousel.items.length - 1 : slide - 1;
    const nextSlide =
        slide === content.carousel.items.length - 1 ? 0 : slide + 1;

    useEffect(() => {
        const carousel = setTimeout(() => {
            setAnimate(true);
            setSlide(nextSlide);
        }, 5000);

        return () => clearTimeout(carousel);
    }, [nextSlide, slide]);

    return (
        <section
            className={classNames(
                styles.section,
                slide % 2 !== 0 && styles.alternate,
            )}
        >
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
            </div>
            <div className={styles.carousel}>
                <div className={styles.imageContainer}>
                    {content.carousel.items.map((item, index) => (
                        <Image
                            key={item.heading}
                            src={`${item.image}-m.png`}
                            alt=""
                            width={1404 / 2}
                            height={876 / 2}
                            className={classNames(
                                styles.image,
                                index === slide && styles.active,
                            )}
                        />
                    ))}
                    <div className={styles.dots}>
                        {content.carousel.items.map((item, index) => (
                            <button
                                key={item.heading}
                                onClick={() => {
                                    setAnimate(false);
                                    setSlide(index);
                                }}
                                className={classNames(
                                    styles.dot,
                                    index === slide && styles.active,
                                )}
                                title={item.heading}
                            />
                        ))}
                    </div>
                </div>
                <div
                    className={classNames(
                        styles.content,
                        !animate && styles.static,
                    )}
                >
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
                            <h3>{item.heading}</h3>
                            <p>{item.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
