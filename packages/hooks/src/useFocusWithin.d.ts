import * as React from 'react';
declare type FocusEvents = {
    onFocus?: (e: React.FocusEvent) => void;
    onBlur?: (e: React.FocusEvent) => void;
};
export declare function useFocusWithin({ onFocus: onFocusCallback, onBlur: onBlurCallback, }: FocusEvents): {
    isFocusWithin: boolean;
    getFocusProps: () => {
        onFocus: (e: React.FocusEvent) => void;
        onBlur: (e: React.FocusEvent) => void;
    };
};
export {};
