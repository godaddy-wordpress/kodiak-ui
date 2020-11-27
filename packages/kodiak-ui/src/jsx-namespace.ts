import { SxProps } from './types'

type WithConditionalSxProps<P> = 'className' extends keyof P
  ? P extends { className?: string }
    ? Omit<P, keyof SxProps> & SxProps
    : Omit<P, keyof SxProps>
  : Omit<P, keyof SxProps>

type ReactJSXElement = JSX.Element
type ReactJSXElementClass = JSX.ElementClass
type ReactJSXElementAttributesProperty = JSX.ElementAttributesProperty
type ReactJSXElementChildrenAttribute = JSX.ElementChildrenAttribute
type ReactJSXLibraryManagedAttributes<C, P> = JSX.LibraryManagedAttributes<C, P>
type ReactJSXIntrinsicAttributes = JSX.IntrinsicAttributes
type ReactJSXIntrinsicClassAttributes<T> = JSX.IntrinsicClassAttributes<T>
type ReactJSXIntrinsicElements = JSX.IntrinsicElements

// export declare namespace ThemeUIJSX {
export type Element = ReactJSXElement
export type ElementClass = ReactJSXElementClass
export type ElementAttributesProperty = ReactJSXElementAttributesProperty
export type ElementChildrenAttribute = ReactJSXElementChildrenAttribute
export type LibraryManagedAttributes<C, P> = WithConditionalSxProps<P> &
  ReactJSXLibraryManagedAttributes<C, P>
export type IntrinsicAttributes = ReactJSXIntrinsicAttributes
export type IntrinsicClassAttributes<T> = ReactJSXIntrinsicClassAttributes<T>
export type IntrinsicElements = {
  [K in keyof ReactJSXIntrinsicElements]: ReactJSXIntrinsicElements[K] & SxProps
}
// }
