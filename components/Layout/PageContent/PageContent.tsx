import Image from 'next/image';
import { FC } from 'react';
import styles from './PageContent.module.scss';

interface Props {
    title: string;
    lastUpdated: string;
    body: string;
}

export const PageContent: FC<Props> = ({ title, lastUpdated, body }) => (
    <section className={styles.section}>
        <div className={styles.content}>
            <div className={styles.heading}>
                <h1
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{ __html: title }}
                />
                <span className={styles.date}>
                    Last updated: {new Date(lastUpdated).toDateString()}
                </span>
                <Image
                    src="/purples-1.png"
                    alt=""
                    width={190 / 2}
                    height={217 / 2}
                    className={styles.float}
                />
            </div>
            <div
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: body }}
                className={styles.body}
            />
        </div>
    </section>
);
