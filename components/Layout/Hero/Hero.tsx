import Image from 'next/image';
import { Quote } from '@Generic/Quote/Quote';
import { content } from 'content';
import styles from './Hero.module.scss';
import { Tile } from './Product/Tile';

export const Hero: React.FC = () => (
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
                        height={204 / 2}
                        width={224 / 2}
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
                <div className={styles.subtitle}>
                    <span
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML={{
                            __html: content.hero.subtitle,
                        }}
                    />
                    <Image
                        src="/black-1.png"
                        alt=""
                        width={100 / 2}
                        height={100 / 2}
                        className={styles.float}
                    />
                </div>
                <div className={styles.intro}>
                    <p
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML={{ __html: content.hero.intro }}
                    />
                    <Image
                        src="/case-purple-1.png"
                        alt=""
                        width={819 / 2}
                        height={819 / 2}
                        className={styles.float}
                    />
                </div>
            </div>
            <Tile />
            <Quote
                image="/quote-image-1.png"
                quote={content.hero.testimonial.quote}
                name={content.hero.testimonial.name}
            />
        </div>
    </section>
);
