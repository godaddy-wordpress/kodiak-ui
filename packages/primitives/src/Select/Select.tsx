import * as React from 'react'
import styled from '@emotion/styled'
import {
  _variant,
  VariantProps,
  sx,
  Theme,
  css,
  KodiakUIProps,
} from 'kodiak-ui'
import { Flex } from '../Flex'
import { SvgIcon } from '../Svg'

/**
 * base
 *
 * Generate the base CSS for the Select component
 * that is aware of the Theme UI theme
 *
 * @param props
 */
export const baseStyles = ({ theme }: { theme: Theme }) =>
  css({
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

type SelectProps = React.PropsWithChildren<KodiakUIProps>

export const SelectStyled = styled('select')<SelectProps>(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  baseStyles,
  ({ variant: variantProp = 'select', variantKey = 'forms', theme }) =>
    _variant({ variant: variantProp, theme, variantKey }),
  sx,
)

export const Select = React.forwardRef(
  (
    props: React.ComponentProps<typeof SelectStyled>,
    ref: React.Ref<HTMLSelectElement>,
  ) => (
    <Flex>
      <SelectStyled ref={ref} {...props} />
      <SvgIcon
        viewBox="0 0 16 16"
        sx={{
          alignSelf: 'center',
          ml: '-28px',
          color: 'text',
          height: '16px',
          width: '16px ',
        }}
      >
        <path d="M11.912 5.754a.62.62 0 0 0-.25-.186.883.883 0 0 0-.344-.068H4.682c-.12 0-.24.024-.344.068a.62.62 0 0 0-.25.186.398.398 0 0 0-.088.252.405.405 0 0 0 .098.25l3.318 4.004c.061.073.147.134.249.176A.886.886 0 0 0 8 10.5a.886.886 0 0 0 .335-.064.633.633 0 0 0 .249-.176l3.318-4.004a.405.405 0 0 0 .098-.25.398.398 0 0 0-.088-.252z" />
      </SvgIcon>
    </Flex>
  ),
)
