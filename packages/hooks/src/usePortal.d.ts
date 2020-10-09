import * as React from 'react';
declare type CustomEvent = {
    event?: React.SyntheticEvent<MouseEvent | KeyboardEvent, Event>;
    portalRef: React.MutableRefObject<HTMLElement>;
    targetRef: React.MutableRefObject<HTMLElement>;
};
declare type CustomEventHandler = (customEvent: CustomEvent) => void;
declare type CustomEventHandlers = {
    [K in keyof React.DOMAttributes<K>]?: CustomEventHandler;
};
declare type UsePortalOptions = {
    closeOnOutsideClick?: boolean;
    closeOnEsc?: boolean;
    bindTo?: HTMLElement;
    isOpen?: boolean;
    onOpen?: CustomEventHandler;
    onClose?: CustomEventHandler;
    onPortalClick?: CustomEventHandler;
} & CustomEventHandlers;
declare type UsePortalReturn = {
    targetRef: React.MutableRefObject<HTMLElement>;
    portalRef: React.MutableRefObject<HTMLElement>;
    isOpen: boolean;
    handleOpenPortal: (event: any) => void;
    handleClosePortal: (event: any) => void;
    Portal: any;
};
export declare const errorMessage1 = "You must either add a `ref` to the element you are interacting with or pass an `event` to openPortal(e) or togglePortal(e).";
export declare function usePortal({ isOpen: defaultIsOpen, onOpen, onClose, }?: UsePortalOptions): UsePortalReturn;
export {};
