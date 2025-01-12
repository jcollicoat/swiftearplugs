import { FC } from 'react';
import { AmEx } from './Logos/AmEx';
import { ApplePay } from './Logos/ApplePay';
import { GooglePay } from './Logos/GooglePay';
import { MasterCard } from './Logos/MasterCard';
import { PayPal } from './Logos/PayPal';
import { ShopPay } from './Logos/ShopPay';
import { UnionPay } from './Logos/UnionPay';
import { Visa } from './Logos/Visa';
import styles from './Payments.module.scss';

export const Payments: FC = () => {
    return (
        <div className={styles.payments}>
            <MasterCard />
            <Visa />
            <AmEx />
            <ApplePay />
            <GooglePay />
            <PayPal />
            <ShopPay />
            <UnionPay />
        </div>
    );
};
