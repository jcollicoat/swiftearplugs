import { ComponentProps, FC } from 'react';
import { Icon } from '@components/Icon/Icon';
import styles from './IconContent.module.scss';

interface Props {
    icon: ComponentProps<typeof Icon>['icon'];
    heading: string;
    content: string;
}

export const IconContent: FC<Props> = ({ icon, heading, content }) => {
    return (
        <li className={styles.item}>
            <Icon icon={icon} />
            <h3>{heading}</h3>
            <p>{content}</p>
        </li>
    );
};
