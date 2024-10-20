import { Connection } from './types';

export const ensureStartsWith = (stringToCheck: string, startsWith: string) =>
    stringToCheck.startsWith(startsWith)
        ? stringToCheck
        : `${startsWith}${stringToCheck}`;

export const removeEdgesAndNodes = <T>(array: Connection<T>): T[] => {
    return array.edges.map((edge) => edge.node);
};
