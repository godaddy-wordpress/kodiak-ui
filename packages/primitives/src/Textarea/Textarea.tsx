import styled from '@emotion/styled'
import { css, _variant, sx, KodiakUIProps, Theme } from 'kodiak-ui'

/**
 * base
 *
 * Generate the base CSS for the button component
 * that is aware of the Theme UI theme
 *
 * @param props
 */
export const baseStyles = ({ theme }: { theme: Theme }) =>
  css({
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

type TextAreaProps = KodiakUIProps

/**
 * Box primitive component which is the base component for
 * all components in Kodiak
 */
export const Textarea = styled('textarea')<TextAreaProps>(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  baseStyles,
  ({ variant: variantProp, theme }) =>
    _variant({ variant: variantProp, theme, variantKey: 'textarea' }),
  sx,
)
