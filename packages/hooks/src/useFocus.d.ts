import * as React from 'react';
declare type FocusEvents = {
    onFocus?: (e: React.FocusEvent) => void;
    onBlur?: (e: React.FocusEvent) => void;
};
export declare function useFocus({ onFocus: onFocusCallback, onBlur: onBlurCallback, }: FocusEvents): {
    getFocusProps: () => {
        onFocus: (e: React.FocusEvent) => void;
        onBlur: (e: React.FocusEvent) => void;
    };
};
export {};
