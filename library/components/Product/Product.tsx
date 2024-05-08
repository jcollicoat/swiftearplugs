'use client';

import { FC } from 'react';
import { useProduct } from './useProduct';

const Product: FC = () => {
    useProduct();

    return <div id="product"></div>;
};

export default Product;
