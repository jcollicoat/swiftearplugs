type Edge<T> = {
    node: T;
};

export type Connection<T> = {
    edges: Array<Edge<T>>;
};

export type Money = {
    amount: string;
    currencyCode: string;
};

export type Image = {
    url: string;
    altText: string;
    width: number;
    height: number;
};
