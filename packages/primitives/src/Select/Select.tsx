import * as React from 'react'
import styled from '@emotion/styled'
import { Theme, css } from 'theme-ui'
import { SerializedStyles } from '@emotion/serialize'
import {
  StyledSystemProps,
  variant,
  sx,
  shouldForwardProp,
  styledSystemProps,
  Box,
} from '../Box/Box'
import { Flex } from '../Flex'

/**
 * base
 *
 * Generate the base CSS for the button component
 * that is aware of the Theme UI theme
 *
 * @param props
 */
export const baseStyles = ({ theme }: { theme: Theme }): SerializedStyles =>
  css({
    alignSelf: 'flex-start',
    display: 'block',
    width: '100%',
    p: 2,
    appearance: 'none',
    fontSize: 'inherit',
    lineHeight: 'inherit',
    border: '1px solid',
    borderRadius: 'default',
    color: 'inherit',
    bg: 'transparent',
  })(theme)

type SelectProps = {
  children: React.ReactNodeArray
  variant?: string
} & StyledSystemProps &
  React.SelectHTMLAttributes<HTMLSelectElement>

// /**
//  * Box primitive component which is the base component for
//  * all components in Kodiak
//  */
export const SelectStyled = styled<'select', SelectProps>('select', {
  shouldForwardProp,
})(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  baseStyles,
  ({ variant: variantProp = 'select', theme }) =>
    variant({ variant: variantProp, theme, variantKey: 'forms' }),
  ...styledSystemProps,
  sx,
)

export const Select = React.forwardRef(
  (props: SelectProps, ref: React.Ref<HTMLSelectElement>) => (
    <Flex>
      <SelectStyled ref={ref} {...props} />
      <svg style={{ marginLeft: '-28px', display: 'block' }}>
        <path d="M7 10l5 5 5-5z" />
      </svg>
    </Flex>
  ),
)
