import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { content } from 'content';
import styles from './ImageTile.module.scss';

export const ImageTile: FC = () => (
    <section className={styles.section}>
        <div className={styles.tile}>
            <Image src="/hearing-damage.jpg" alt="" fill />
            <div className={styles.content}>
                <h2
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{
                        __html: content.hearingDamage.heading,
                    }}
                />
                <p
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{
                        __html: content.hearingDamage.content,
                    }}
                />
                <Link
                    href={content.hearingDamage.button.link}
                    target="_blank"
                    className={styles.link}
                >
                    {content.hearingDamage.button.text}
                </Link>
            </div>
        </div>
    </section>
);
