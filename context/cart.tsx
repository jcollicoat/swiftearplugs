'use client';

import React, {
    createContext,
    FC,
    PropsWithChildren,
    use,
    useCallback,
    useContext,
    useMemo,
    useOptimistic,
} from 'react';
import { Cart, CartItem } from 'shopify/cart.types';
import { Product, ProductVariant } from 'shopify/product.types';

type UpdateType = 'plus' | 'minus' | 'delete';

type CartAction =
    | {
          type: 'UPDATE_ITEM';
          payload: { merchandiseId: string; updateType: UpdateType };
      }
    | {
          type: 'ADD_ITEM';
          payload: { variant: ProductVariant; product: Product };
      };

type CartContextType = {
    cart: Cart | undefined;
    updateCartItem: (merchandiseId: string, updateType: UpdateType) => void;
    addCartItem: (variant: ProductVariant, product: Product) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

const calculateItemCost = (quantity: number, price: string): string => {
    return (Number(price) * quantity).toString();
};

const updateCartItem = (
    item: CartItem,
    updateType: UpdateType,
): CartItem | null => {
    if (updateType === 'delete') return null;

    const newQuantity =
        updateType === 'plus' ? item.quantity + 1 : item.quantity - 1;
    if (newQuantity === 0) return null;

    const singleItemAmount =
        Number(item.cost.totalAmount.amount) / item.quantity;
    const newTotalAmount = calculateItemCost(
        newQuantity,
        singleItemAmount.toString(),
    );

    return {
        ...item,
        quantity: newQuantity,
        cost: {
            ...item.cost,
            totalAmount: {
                ...item.cost.totalAmount,
                amount: newTotalAmount,
            },
        },
    };
};

const createOrUpdateCartItem = (
    existingItem: CartItem | undefined,
    variant: ProductVariant,
    product: Product,
): CartItem => {
    const quantity = existingItem ? existingItem.quantity + 1 : 1;
    const totalAmount = calculateItemCost(quantity, variant.price.amount);

    return {
        id: existingItem?.id,
        quantity,
        cost: {
            totalAmount: {
                amount: totalAmount,
                currencyCode: variant.price.currencyCode,
            },
        },
        merchandise: {
            id: variant.id,
            title: variant.title,
            selectedOptions: variant.selectedOptions,
            product: {
                id: product.id,
                handle: product.handle,
                title: product.title,
                featuredImage: product.featuredImage,
            },
        },
    };
};

const updateCartTotals = (
    lines: CartItem[],
): Pick<Cart, 'totalQuantity' | 'cost'> => {
    const totalQuantity = lines.reduce((sum, item) => sum + item.quantity, 0);
    const totalAmount = lines.reduce(
        (sum, item) => sum + Number(item.cost.totalAmount.amount),
        0,
    );
    const currencyCode = lines[0]?.cost.totalAmount.currencyCode ?? 'NZD';

    return {
        totalQuantity,
        cost: {
            subtotalAmount: { amount: totalAmount.toString(), currencyCode },
            totalAmount: { amount: totalAmount.toString(), currencyCode },
            totalTaxAmount: { amount: '0', currencyCode },
        },
    };
};

const createEmptyCart = (): Cart => {
    return {
        id: undefined,
        checkoutUrl: '',
        totalQuantity: 0,
        lines: [],
        cost: {
            subtotalAmount: { amount: '0.00', currencyCode: 'NZD' },
            totalAmount: { amount: '0.00', currencyCode: 'NZD' },
            totalTaxAmount: { amount: '0.00', currencyCode: 'NZD' },
        },
        discountCodes: [],
    };
};

const cartReducer = (state: Cart | undefined, action: CartAction): Cart => {
    const currentCart = state || createEmptyCart();

    switch (action.type) {
        case 'UPDATE_ITEM': {
            const { merchandiseId, updateType } = action.payload;
            const updatedLines = currentCart.lines
                .map((item) =>
                    item.merchandise.id === merchandiseId
                        ? updateCartItem(item, updateType)
                        : item,
                )
                .filter(Boolean) as CartItem[];

            if (updatedLines.length === 0) {
                return {
                    ...currentCart,
                    lines: [],
                    totalQuantity: 0,
                    cost: {
                        ...currentCart.cost,
                        totalAmount: {
                            ...currentCart.cost.totalAmount,
                            amount: '0.00',
                        },
                    },
                };
            }

            return {
                ...currentCart,
                ...updateCartTotals(updatedLines),
                lines: updatedLines,
            };
        }
        case 'ADD_ITEM': {
            const { variant, product } = action.payload;
            const existingItem = currentCart.lines.find(
                (item) => item.merchandise.id === variant.id,
            );
            const updatedItem = createOrUpdateCartItem(
                existingItem,
                variant,
                product,
            );

            const updatedLines = existingItem
                ? currentCart.lines.map((item) =>
                      item.merchandise.id === variant.id ? updatedItem : item,
                  )
                : [...currentCart.lines, updatedItem];

            return {
                ...currentCart,
                ...updateCartTotals(updatedLines),
                lines: updatedLines,
            };
        }
        default:
            return currentCart;
    }
};

interface CartProviderProps {
    cartPromise: Promise<Cart | undefined>;
}

export const CartProvider: FC<PropsWithChildren<CartProviderProps>> = ({
    children,
    cartPromise,
}) => {
    const initialCart = use(cartPromise);
    const [optimisticCart, updateOptimisticCart] = useOptimistic(
        initialCart,
        cartReducer,
    ); // TODO: Fix bug around optimistic updates (removed products re-appearing at times)

    const updateCartItem = useCallback(
        (merchandiseId: string, updateType: UpdateType) => {
            updateOptimisticCart({
                type: 'UPDATE_ITEM',
                payload: { merchandiseId, updateType },
            });
        },
        [updateOptimisticCart],
    );

    const addCartItem = useCallback(
        (variant: ProductVariant, product: Product) => {
            updateOptimisticCart({
                type: 'ADD_ITEM',
                payload: { variant, product },
            });
        },
        [updateOptimisticCart],
    );

    const value = useMemo(
        () => ({
            cart: optimisticCart,
            updateCartItem,
            addCartItem,
        }),
        [addCartItem, optimisticCart, updateCartItem],
    );

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
