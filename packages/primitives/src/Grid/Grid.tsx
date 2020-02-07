import styled from '@emotion/styled'
import { css } from 'theme-ui'
import { SerializedStyles } from '@emotion/serialize'
import {
  StyledSystemProps,
  variant,
  sx,
  shouldForwardProp,
  styledSystemProps,
  BoxElements,
  VariantProps,
} from '../Box/Box'

type StringOrNumberArray = string | number | (string | number)[]

type GridProps = {
  width: StringOrNumberArray
  columns: StringOrNumberArray
  gap?: number
} & VariantProps &
  StyledSystemProps

const px = (n: string | number) => (typeof n === 'number' ? `${n}px` : n)

/**
 * widthToColumns
 *
 * Converts the width prop to the proper columns repeat
 * css for Grid
 *
 * TODO: Add typing for the recursive function
 *
 * @param width string | number | (string|number)[]
 */
function widthToColumns(width: StringOrNumberArray): any {
  return Array.isArray(width)
    ? width.map(widthToColumns)
    : !!width && `repeat(auto-fit, minmax(${px(width)}, 1fr))`
}

/**
 * countToColumns
 *
 * Converts the columns prop to the proper columns repeat
 * css for Grid
 *
 * TODO: Add typing for the recursive function
 *
 * @param columns string | number | (string|number)[]
 */
function countToColumns(columns: StringOrNumberArray): any {
  return Array.isArray(columns)
    ? columns.map(countToColumns)
    : !!columns &&
        (typeof columns === 'number' ? `repeat(${columns}, 1fr)` : columns)
}

/**
 * gridTemplateColumns
 *
 * Generates the appropriate CSS to inject into the base styles
 * depending on which prop was provided to the component
 *
 * @param { width, columns }
 */
function gridTemplateColumns({
  width,
  columns,
}: Pick<GridProps, 'width' | 'columns'>): string {
  return !!width ? widthToColumns(width) : countToColumns(columns)
}

/**
 * base
 *
 * Generate the base CSS for the Grid component
 * that is aware of the Theme UI theme
 *
 * @param props
 */
export const baseStyles = ({
  theme,
  width,
  columns,
  gap,
}: GridProps): SerializedStyles =>
  css({
    display: 'grid',
    gridGap: gap,
    gridTemplateColumns: gridTemplateColumns({ width, columns }),
  })(theme)

/**
 * Grid component
 *
 * Outputs a `div` element with the display: grid
 * property added to it. Accepts the `width`, `columns` and `gap`
 * props to properly add the CSS grid parameters
 */
export const Grid = styled<BoxElements, GridProps>('div', {
  shouldForwardProp,
})(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  baseStyles,
  ({ variant: variantProp, variantKey = 'grids', theme }) =>
    variant({ variant: variantProp, theme, variantKey }),
  ...styledSystemProps,
  sx,
)
