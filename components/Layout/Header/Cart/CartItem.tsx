import Image from 'next/image';
import { FC } from 'react';
import { useFormState } from 'react-dom';
import { PiTrash } from 'react-icons/pi';
import { SRAnnounce } from '@Generic/SRAnnounce/SRAnnounce';
import { useCart } from 'context/cart';
import { removeItem } from 'shopify/cart.actions';
import { CartItem as CartItemType } from 'shopify/cart.types';
import styles from './CartItem.module.scss';

interface Props {
    item: CartItemType;
}

export const CartItem: FC<Props> = ({ item }) => {
    const { updateCartItem } = useCart();
    const [message, formAction] = useFormState(removeItem, null);

    const actionWithVariant = formAction.bind(null, item.merchandise.id);

    const image =
        item.merchandise.product.variants?.edges.find(
            (edge) =>
                edge.node.title === item.merchandise.selectedOptions[0].value,
        )?.node.image.url ??
        item.merchandise.product.featuredImage?.url ??
        '/product-fallback.png';

    return (
        <div className={styles.item}>
            <div className={styles.details}>
                <Image src={image} alt="" width={96} height={96} />
                <div className={styles.text}>
                    <h3 className={styles.color}>
                        {item.merchandise.selectedOptions[0].value}
                    </h3>
                    <span className={styles.product}>
                        {item.merchandise.product.title}
                    </span>
                    <span className={styles.price}>
                        {`$${item.cost.totalAmount.amount}0`}
                    </span>
                </div>
            </div>
            <form
                className={styles.actions}
                action={async () => {
                    updateCartItem(item.merchandise.id, 'delete');
                    await actionWithVariant();
                }}
            >
                <span className={styles.quantity}>{item.quantity}</span>
                <button>
                    <PiTrash size={24} />
                </button>
            </form>
            <SRAnnounce message={message} />
        </div>
    );
};
