import * as React from 'react';
declare type EventType = string;
export interface Event {
    name: EventType;
    payload: any;
}
declare type EventReducer = (event: Event) => Event;
declare type EventLoggerStore = {
    logEvent: (event: Event) => void;
    eventReducers: EventReducer[];
    setEventReducers: (eventReducers: EventReducer[]) => void;
};
export declare const useEventLoggerStore: import("zustand").UseStore<EventLoggerStore>;
export declare function useEventLogger(): (event: Event) => void;
export declare function useEventLoggerReducers({ initialEventReducers }: {
    initialEventReducers: any;
}, deps?: React.DependencyList): (EventReducer[] | ((eventReducers: EventReducer[]) => void))[];
declare type UseWrappedEventHandlerProps = {
    isLoggingEventsActive?: boolean;
    name: string;
    handler?: (any: any) => void;
    addToPayload?: (event: any) => void;
};
export declare function useWrappedEventHandler({ name, handler, addToPayload, isLoggingEventsActive: isActive, }: UseWrappedEventHandlerProps): (sourceEvent: any) => void;
export {};
