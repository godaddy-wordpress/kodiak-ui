declare type OnMessage = (props?: any) => void;
export declare function subscribe<T>(key: string, onMessage: OnMessage): void;
export declare function unsubscribe(key: string, onMessage: OnMessage): void;
export declare function publish<T>(key: string, message: T): void;
export declare function useSubscribe<TMessage>({ key, handler, }: {
    key: string;
    handler: (message: TMessage) => void;
}, handlerDependencies: readonly any[]): void;
export {};
