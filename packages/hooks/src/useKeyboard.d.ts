import * as React from 'react';
declare type KeyboardEvents = {
    onKeyDown?: (e: React.KeyboardEvent) => void;
    onKeyUp?: (e: React.KeyboardEvent) => void;
};
export declare function useKeyboard({ onKeyDown: handleKeyDown, onKeyUp: handleKeyUp, }: KeyboardEvents): {
    getKeyboardProps: () => KeyboardEvents;
};
export {};
