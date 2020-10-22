import * as React from 'react'
import { UseSelectGetMenuPropsOptions } from 'downshift'
import {
  _variant as getVariantStyles,
  VariantProps,
  sx,
  Theme,
  css,
  styled,
  KodiakUIProps,
} from 'kodiak-ui'
import { Box } from '@kodiak-ui/primitives/box'

export type SelectMenuProps = {
  ref: React.Ref<HTMLUListElement>
  children: React.ReactNode
} & KodiakUIProps &
  UseSelectGetMenuPropsOptions

/**
 * base
 *
 * Generate the base CSS for the SelectMenu component
 * that is aware of the Theme UI theme
 *
 * @param props
 */
export function base({ theme }: { theme: Theme }) {
  return css({
    borderTop: 0,
    background: 'white',
    boxShadow: 'default',
    border: '1px solid',
    borderColor: 'muted',
    borderRadius: 'default',
    listStyle: 'none',
    margin: 0,
    maxHeight: '200px',
    minWidth: '150px',
    maxWidth: '184px',
    overflowY: 'auto',
    padding: 0,
    position: 'absolute',
    top: 0,
    left: 0,
  })(theme)
}

function variant({
  variant: variantProp,
  variantKey,
  theme,
}: { theme: Theme } & VariantProps) {
  return getVariantStyles({ variant: variantProp, theme, variantKey })
}

const Ul = styled('ul')<SelectMenuProps>(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  base,
  variant,
  sx,
)

export const SelectMenu = React.forwardRef(function SelectMenu(
  { children, variantKey = 'selects', ...props }: SelectMenuProps,
  ref: React.Ref<HTMLUListElement>,
) {
  return (
    <>
      <Ul ref={ref} variantKey={variantKey} {...props}>
        {children}
      </Ul>
      {/* if you Tab from menu, focus goes on button, and it shouldn't. only happens here. */}
      <Box tabIndex={0} />
    </>
  )
})
