import Image from 'next/image';
import { FC } from 'react';
import { content } from 'content';
import styles from './LayeredContent.module.scss';

export const LayeredContent: FC = () => (
    <section className={styles.section}>
        <div className={styles.content}>
            <div className={styles.heading}>
                <h2
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{
                        __html: content.layered.heading,
                    }}
                />
            </div>
            <div className={styles.items}>
                {content.layered.items.map((item) => (
                    <div key={item.heading} className={styles.item}>
                        <h3
                            // eslint-disable-next-line react/no-danger
                            dangerouslySetInnerHTML={{ __html: item.heading }}
                        />
                        <p
                            // eslint-disable-next-line react/no-danger
                            dangerouslySetInnerHTML={{ __html: item.content }}
                        />
                        <Image
                            src={item.float.src}
                            alt=""
                            width={item.float.width / 2}
                            height={item.float.height / 2}
                            className={styles.float}
                        />
                    </div>
                ))}
            </div>
        </div>
    </section>
);
