import { FC } from 'react';
import styles from './SRAnnounce.module.scss';

interface Props {
    message: string | null | undefined;
}

export const SRAnnounce: FC<Props> = ({ message }) => (
    <p className={styles.announce} aria-live="polite" role="status">
        {message}
    </p>
);
