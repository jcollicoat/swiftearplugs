'use client';

import classNames from 'classnames';
import Image from 'next/image';
import { FC, useState } from 'react';
import styles from './Selector.module.scss';

export const Selector: FC = () => {
    const [selected, setSelected] = useState('pink');

    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <Image src="/rose-gold-lockup.png" alt="Rose Gold" fill />
            </div>
            <div className={styles.selector}>
                <button
                    className={classNames(
                        styles.pink,
                        selected === 'pink' && styles.selected,
                    )}
                    onClick={() => setSelected('pink')}
                >
                    Rose Gold
                </button>
                <button
                    className={classNames(
                        styles.purple,
                        selected === 'purple' && styles.selected,
                    )}
                    onClick={() => setSelected('purple')}
                >
                    Lilac Purple
                </button>
                <button
                    className={classNames(
                        styles.black,
                        selected === 'black' && styles.selected,
                    )}
                    onClick={() => setSelected('black')}
                >
                    Matte Black
                </button>
            </div>
        </div>
    );
};
