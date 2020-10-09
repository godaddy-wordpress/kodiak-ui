export declare type AddRemoveListenerType = {
    addEventListener(name: string, handler: (event?: any) => void, ...args: any[]): any;
    removeEventListener(name: string, handler: (event?: any) => void, ...args: any[]): any;
};
export interface OnOffListenerType {
    on(name: string, handler: (event?: any) => void, ...args: any[]): any;
    off(name: string, handler: (event?: any) => void, ...args: any[]): any;
}
export declare type UseEventListenerTarget = AddRemoveListenerType | OnOffListenerType;
declare type AddEventListener<T> = T extends AddRemoveListenerType ? T['addEventListener'] : T extends OnOffListenerType ? T['on'] : never;
interface UseEventListenerOptions<T> {
    name: Parameters<AddEventListener<T>>[0];
    handler?: null | undefined | Parameters<AddEventListener<T>>[1];
    target?: null | T | Window;
    options?: Parameters<AddEventListener<T>>[2];
}
export declare function useEventListener<T extends UseEventListenerTarget>({ name, handler, target, options, }: UseEventListenerOptions<T>): void;
export {};
