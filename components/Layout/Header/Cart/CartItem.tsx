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
                <Image src={image} alt="" width={48} height={48} />
                <div>
                    <span className={styles.color}>
                        {item.merchandise.selectedOptions[0].value}
                        {item.quantity > 1 && ` x${item.quantity}`}
                    </span>
                    <span className={styles.product}>
                        {item.merchandise.product.title}
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
                <button>
                    <PiTrash />
                </button>
            </form>
            <SRAnnounce message={message} />
        </div>
    );
};
