export declare type UseControlledProps<T> = {
    controlled: T;
    default: T;
    name: string;
    state: string;
};
export declare function useControlled<T>({ controlled, default: defaultProp, name, state, }: UseControlledProps<T>): [T, (newValue: T) => void];
