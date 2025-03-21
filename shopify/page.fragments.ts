import { seoFragment } from './fragments';

const pageFragment = /* GraphQL */ `
    fragment page on Page {
        ... on Page {
            id
            title
            handle
            body
            bodySummary
            seo {
                ...seo
            }
            createdAt
            updatedAt
        }
    }
    ${seoFragment}
`;

export const getPageQuery = /* GraphQL */ `
    query getPage($handle: String!) {
        pageByHandle(handle: $handle) {
            ...page
        }
    }
    ${pageFragment}
`;
