/**
 * usePrevious hook
 *
 * Provides you with the value from the previous render of
 * the argument passed in
 *
 * Accepts type generic for the type of the value
 *
 * @param value: T
 * @returns ref.current: T
 */
export declare function usePrevious<T>(value: T): T;
