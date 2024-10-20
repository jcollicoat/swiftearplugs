import { ProductProvider } from 'context/product';
import { getProduct } from 'shopify/product';
import { Payments } from './Payments/Payments';
import { Selector } from './Selector/Selector';
import { Shipping } from './Shipping/Shipping';
import styles from './Tile.module.scss';

export const Tile: React.FC = async () => {
    const product = await getProduct('swift-earplugs');

    if (!product) return null;

    const productJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.title,
        description: product.description,
        image: product.featuredImage.url,
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
                    <Selector />
                    <Shipping />
                    <Payments />
                </div>
            </div>
        </ProductProvider>
    );
};
