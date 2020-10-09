import { AddRemoveListenerType, OnOffListenerType } from './useEventListener';
interface UseKeyOptions {
    key: string;
    handler: (event: KeyboardEvent) => void;
    event?: 'keydown' | 'keypress' | 'keyup';
    target?: Window | AddRemoveListenerType | OnOffListenerType | null;
}
export declare function useKey({ key, handler, event, target, }: UseKeyOptions): void;
export {};
