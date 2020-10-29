// this is https://github.com/mui-org/material-ui/blob/next/packages/material-ui/src/OverridableComponent.d.ts
// but component has been changed to `as`
import { SxStyleProp } from 'kodiak-ui'

/**
 * A component whose root component can be controlled via a `component` prop.
 *
 * Adjusts valid props based on the type of `component`.
 */
export interface OverridableComponent<M extends OverridableTypeMap> {
  <C extends React.ElementType>(
    props: {
      /**
       * The component used for the root node.
       * Either a string to use a HTML element or a component.
       */
      as?: C
      children?: React.ReactNode
    } & OverrideProps<M, C>,
  ): JSX.Element
  (props: DefaultComponentProps<M>): JSX.Element
}

/**
 * Props of the component if `component={Component}` is used.
 */
// prettier-ignore
export type OverrideProps<
  M extends OverridableTypeMap,
  C extends React.ElementType
> = (
  & BaseProps<M>
  & Omit<React.ComponentPropsWithRef<C>, keyof BaseProps<M>>
);

/**
 * Props if `component={Component}` is NOT used.
 */
// prettier-ignore
export type DefaultComponentProps<M extends OverridableTypeMap> =
  & BaseProps<M>
  & Omit<React.ComponentPropsWithRef<M['defaultComponent']>, keyof BaseProps<M>>;

/**
 * Props defined on the component (+ common material-ui props).
 */
// prettier-ignore
export type BaseProps<M extends OverridableTypeMap> =
  & M['props']
  & CommonProps;

/**
 * Props that are valid for material-ui components.
 */
// each component declares it's classes in a separate interface for proper JSDOC.
export interface CommonProps {
  className?: string
  style?: React.CSSProperties
  sx?: SxStyleProp
}

export interface OverridableTypeMap {
  props: unknown
  defaultComponent: React.ElementType
}
