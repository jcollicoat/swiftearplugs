import Image from 'next/image';
import { FC } from 'react';
import { PiCheckCircle, PiXCircle } from 'react-icons/pi';
import { content } from 'content';
import styles from './Comparison.module.scss';

export const Comparison: FC = () => (
    <section className={styles.section}>
        <div className={styles.content}>
            <h2
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: content.comparison.heading }}
            />
            <div className={styles.card}>
                <table>
                    <thead>
                        <tr className={styles.images}>
                            <td />
                            <td className={styles.swift}>
                                <Image
                                    src="/pinks-1.png"
                                    alt=""
                                    width={224 / 2}
                                    height={204 / 2}
                                />
                            </td>
                            <td className={styles.divider} />
                            <td className={styles.competitor}>
                                <Image
                                    src="/foam.png"
                                    alt=""
                                    width={170 / 2}
                                    height={173 / 2}
                                />
                            </td>
                        </tr>
                        <tr className={styles.headings}>
                            <td />
                            <td
                                // eslint-disable-next-line react/no-danger
                                dangerouslySetInnerHTML={{
                                    __html: content.comparison.table.swift,
                                }}
                                className={styles.swift}
                            />
                            <td className={styles.divider} />
                            <td
                                // eslint-disable-next-line react/no-danger
                                dangerouslySetInnerHTML={{
                                    __html: content.comparison.table
                                        .competitors,
                                }}
                                className={styles.competitor}
                            />
                        </tr>
                    </thead>
                    <tbody>
                        {content.comparison.table.features.map((feature) => (
                            <tr key={feature} className={styles.feature}>
                                <td
                                    className={styles.text}
                                    // eslint-disable-next-line react/no-danger
                                    dangerouslySetInnerHTML={{
                                        __html: feature,
                                    }}
                                />
                                <td className={styles.check}>
                                    <PiCheckCircle size={24} />
                                </td>
                                <td className={styles.divider} />
                                <td className={styles.cross}>
                                    <PiXCircle size={24} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </section>
);
