import * as React from 'react';
export declare const useMeasure: <T>() => [{
    ref: React.MutableRefObject<T>;
}, {
    left: number;
    top: number;
    width: number;
    height: number;
    bottom: number;
    x: number;
    y: number;
}];
