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
                <Image
                    src="/purples-2.png"
                    alt=""
                    width={186 / 2}
                    height={201 / 2}
                    className={styles.float}
                />
            </div>
            <div className={styles.items}>
                {/* TODO: extract to component */}
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
                            src={item.float1.src}
                            alt=""
                            width={item.float1.width / 2}
                            height={item.float1.height / 2}
                            className={styles.float1}
                        />
                        <Image
                            src={item.float2.src}
                            alt=""
                            width={item.float2.width / 2}
                            height={item.float2.height / 2}
                            className={styles.float2}
                        />
                        {item.float3 && (
                            <Image
                                src={item.float3.src}
                                alt=""
                                width={item.float3.width / 2}
                                height={item.float3.height / 2}
                                className={styles.float3}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    </section>
);
