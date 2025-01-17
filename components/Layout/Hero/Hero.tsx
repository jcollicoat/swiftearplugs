import Image from 'next/image';
import { FC } from 'react';
import { Quote } from '@Generic/Quote/Quote';
import { content } from 'content';
import styles from './Hero.module.scss';
import { ProductTile } from './Product/ProductTile';

export const Hero: FC = () => (
    <section className={styles.section}>
        <div className={styles.content}>
            <div className={styles.lockup}>
                <div className={styles.title}>
                    <h1
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML={{ __html: content.hero.title }}
                    />
                    <Image
                        src="/pinks-1.png"
                        alt=""
                        width={224 / 2}
                        height={204 / 2}
                        className={styles.float1}
                    />
                    <Image
                        src="/pinks-2.png"
                        alt=""
                        width={194 / 2}
                        height={228 / 2}
                        className={styles.float2}
                    />
                </div>
                <div className={styles.intro}>
                    <p
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML={{ __html: content.hero.intro }}
                    />
                    <Image
                        src="/black-1.png"
                        alt=""
                        width={100 / 2}
                        height={100 / 2}
                        className={styles.float1}
                    />
                    <Image
                        src="/case-purple-1.png"
                        alt=""
                        width={819 / 2}
                        height={819 / 2}
                        className={styles.float2}
                    />
                </div>
            </div>
            <ProductTile />
            <Quote
                image={content.hero.testimonial.image}
                quote={content.hero.testimonial.quote}
                name={content.hero.testimonial.name}
            />
        </div>
    </section>
);
