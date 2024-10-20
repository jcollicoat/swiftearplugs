export const imageFragment = /* GraphQL */ `
    fragment image on Image {
        url
        altText
        width
        height
    }
`;

export const seoFragment = /* GraphQL */ `
    fragment seo on SEO {
        description
        title
    }
`;
