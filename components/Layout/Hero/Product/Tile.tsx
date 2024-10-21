import { ProductProvider } from 'context/product';
import { getProduct } from 'shopify/product';
import { AddToCart } from './AddToCart/AddToCart';
import { Images } from './Images/Images';
import { Payments } from './Payments/Payments';
import { Selector } from './Selector/Selector';
import { Shipping } from './Shipping/Shipping';
import styles from './Tile.module.scss';

const { PRODUCT_HANDLE } = process.env;

export const Tile: React.FC = async () => {
    if (!PRODUCT_HANDLE) return null;

    const product = await getProduct(PRODUCT_HANDLE);

    if (!product) return null;

    const productJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.title,
        description: product.description,
        image: product.featuredImage?.url,
        offers: {
            '@type': 'AggregateOffer',
            availability: product.availableForSale
                ? 'https://schema.org/InStock'
                : 'https://schema.org/OutOfStock',
            priceCurrency: product.priceRange.minVariantPrice.currencyCode,
            highPrice: product.priceRange.maxVariantPrice.amount,
            lowPrice: product.priceRange.minVariantPrice.amount,
        },
    };

    return (
        <ProductProvider>
            <script
                type="application/ld+json"
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(productJsonLd),
                }}
            />
            <div className={styles.container}>
                <div className={styles.tile}>
                    <Images product={product} />
                    <Selector variants={product.variants} />
                    <AddToCart product={product} />
                    <Shipping />
                    <Payments />
                </div>
            </div>
        </ProductProvider>
    );
};
