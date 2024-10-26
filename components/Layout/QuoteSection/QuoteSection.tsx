import { FC } from 'react';
import { Quote } from '@Generic/Quote/Quote';
import { content } from 'content';
import styles from './QuoteSection.module.scss';

export const QuoteSection: FC = () => (
    <section className={styles.section}>
        <div className={styles.content}>
            <Quote
                image={content.testimonial.image}
                quote={content.testimonial.quote}
                name={content.testimonial.name}
                altFloat
            />
        </div>
    </section>
);
