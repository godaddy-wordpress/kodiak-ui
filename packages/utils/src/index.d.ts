export declare const __DEV__: boolean;
export declare function hasKey<O>(obj: O, key: string | number | symbol): key is keyof O;
export declare function setAttributes<T extends Element | null>(element: T, attributes: {
    [key: string]: string;
}): void;
interface NextIndexProps {
    moveAmount: number;
    baseIndex: number;
    items: {
        [key: string]: Element | null;
    };
    getItemNodeFromIndex: (index: number) => Element | null;
    circular?: boolean;
}
export declare function getNextIndex({ moveAmount, baseIndex, items, getItemNodeFromIndex, circular, }: NextIndexProps): number;
export declare const isClient: boolean;
export {};
