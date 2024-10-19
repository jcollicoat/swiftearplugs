/** @type {import('next').NextConfig} */

const config = {
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.shopify.com',
                pathname: '/s/files/**',
            },
        ],
    },
};

export default config;
