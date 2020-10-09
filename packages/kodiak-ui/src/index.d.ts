import * as React from 'react';
import { SerializedStyles } from '@emotion/serialize';
import styled from '@emotion/styled';
import { css, ThemeUIStyleObject, ColorMode, Theme as ThemeUiTheme, SxStyleProp } from '@theme-ui/css';
import './react-jsx';
export * from './provider';
export type { SerializedStyles } from '@emotion/serialize';
export type { SxStyleProp } from '@theme-ui/css';
export declare type StyleObject = ThemeUIStyleObject;
export declare type SxProps = {
    sx?: StyleObject;
};
export declare type Variant = {
    [key: string]: StyleObject;
};
export declare type Component = {
    [key: string]: StyleObject;
};
export declare type KodiakState = {
    variants: Variant;
    components: Component;
    variant: (key: string, styles: StyleObject) => Variant;
    component: (key: string, styles: StyleObject) => Component;
};
export declare type ScaleArray<T> = T[];
export declare type ScaleObject<T> = {
    [K: string]: T | Scale<T>;
    [I: number]: T;
};
export declare type Scale<T> = ScaleArray<T> | ScaleObject<T>;
export declare type TLength = string | 0 | number;
export declare type ScaleColorMode = ColorMode & {
    /**
     * Nested color modes can provide overrides when used in conjunction with
     * `Theme.initialColorModeName and `useColorMode()`
     */
    modes?: {
        [k: string]: ColorMode;
    };
};
export declare type GlobalStylesObject = {
    [k: string]: StyleObject;
};
declare type System = Omit<ThemeUiTheme, 'initialColorModeName' | 'useBodyStyles' | 'useBorderBox' | 'useCustomProperties' | 'useColorSchemeMediaQuery' | 'useLocalStorage'>;
declare type ConfigurationOptions = Pick<ThemeUiTheme, 'initialColorModeName' | 'useBodyStyles' | 'useBorderBox' | 'useCustomProperties' | 'useColorSchemeMediaQuery' | 'useLocalStorage'>;
export declare type CreateDesignSystemOptions = {
    system?: System;
    global?: {
        [key: string]: StyleObject;
    };
    options?: ConfigurationOptions;
};
export declare type GlobalStyleObject = {
    [key: string]: StyleObject;
};
export declare type Theme = ThemeUiTheme & {
    global?: GlobalStyleObject;
};
export declare const Store: import("zustand").StoreApi<KodiakState>;
export declare const variant: (key: string, styles: any) => Variant;
export declare const component: (key: string, styles: any) => Component;
export declare const useKodiakStore: import("zustand").UseStore<KodiakState>;
export declare function useVariant(variant: Variant): StyleObject;
export declare function useVariants(): Variant;
export declare function useComponent(component: Component): any;
export declare function useComponents(): Component;
export declare function jsx(type: any, props: any, ...children: React.ReactNode[]): any;
export declare function createDesignSystem({ system, global, options, }?: CreateDesignSystemOptions): {
    theme: Theme;
};
export declare const shouldForwardProp: any;
export declare const get: (obj: Record<string, unknown>, key: any, def?: any, p?: any, undef?: any) => any;
/**
 * sx function to pass the sx prop and theme
 * into Theme UI's css function with parses the values in the
 * prop and serializing them with the theme values
 *
 * @param props any
 */
export declare function sx(props: any): SerializedStyles;
/**
 * variant
 *
 * Returns a function that accept's the components
 * props. The variant and theme props are passed into `css`
 * to generate the Emotion css that will be applied to the
 * component
 *
 * Variants are defined in the theme with a key and then variant.
 *
 * {
 *   buttons: {
 *     primary: {
 *       bg: 'primary',
 *       color: 'white',
 *     }
 *   }
 * }
 */
export interface VariantProps {
    variant?: string;
    variantKey?: string;
    variants?: string | string[];
}
export declare type BaseProp = {
    base?: string | string[];
    __base?: SxStyleProp;
};
/**
 * Legacy method for getting variants from a theme
 *
 * Use getVariants instead which parses the `variants` prop.
 *
 * @deprecated
 */
export declare function _variant({ variant, theme, variantKey, }: {
    theme: Theme;
} & VariantProps): any;
/**
 * Get the appropriate CSS from the theme for the
 * specified variants.
 *
 * @param variants string or array of variants
 */
export declare const getVariants: (variants: string | string[]) => (theme: Theme) => any;
/**
 * Get the appropriate CSS from the theme for the specified
 * components.
 *
 * @param base string or array of base component defaults
 */
export declare const getComponentBase: (base: string | string[]) => (theme: Theme) => any;
export { css, styled };
