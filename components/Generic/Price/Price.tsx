import { FC } from 'react';

interface Props {
    price: string;
}

export const Price: FC<Props> = ({ price }) => {
    const dollars = price.split('.')[0];
    const cents = price.split('.')[1];

    if (cents) {
        if (cents.length === 1) {
            return `$${dollars}.${cents}0`;
        }

        return `$${dollars}.${cents.slice(0, 2)}`;
    }

    return `$${dollars}.00`;
};
