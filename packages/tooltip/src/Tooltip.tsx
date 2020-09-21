import * as React from 'react'
import {
  _variant,
  VariantProps,
  sx,
  Theme,
  css,
  SerializedStyles,
  styled,
  SxStyleProp,
} from 'kodiak-ui'

export type TooltipProps = {
  children: React.ReactNode
  sx?: SxStyleProp
} & VariantProps

export function base({ theme }: { theme: Theme }): SerializedStyles {
  return css({
    bg: 'white',
    border: '1px solid',
    borderColor: 'muted',
    borderRadius: 'default',
    maxWidth: '250px',
    p: 2,
    zIndex: 9999,
    "&[data-popper-placement^='top'] > #kodiak-ui-tooltip-arrow": {
      bottom: '-5px',
    },
    "&[data-popper-placement^='bottom'] > #kodiak-ui-tooltip-arrow": {
      top: '-5px',
    },
    "&[data-popper-placement^='left'] > #kodiak-ui-tooltip-arrow": {
      right: '-5px',
    },
    "&[data-popper-placement^='right'] > #kodiak-ui-tooltip-arrow": {
      left: '-5px',
    },
    "&[data-popper-placement^='top'] > #kodiak-ui-tooltip-arrow::before": {
      borderRight: '1px solid',
      borderBottom: '1px solid',
      borderColor: 'muted',
    },
    "&[data-popper-placement^='bottom'] > #kodiak-ui-tooltip-arrow::before": {
      borderLeft: '1px solid',
      borderTop: '1px solid',
      borderColor: 'muted',
    },
    "&[data-popper-placement^='left'] > #kodiak-ui-tooltip-arrow::before": {
      borderRight: '1px solid',
      borderTop: '1px solid',
      borderColor: 'muted',
    },
    "&[data-popper-placement^='right'] > #kodiak-ui-tooltip-arrow::before": {
      borderLeft: '1px solid',
      borderBottom: '1px solid',
      borderColor: 'muted',
    },
  })(theme)
}

const TooltipStyle = styled('div')<TooltipProps>(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  base,
  ({ variant: variantProp, variantKey = 'tooltips', theme }) =>
    _variant({ variant: variantProp, theme, variantKey }),
  sx,
)

export const Tooltip = React.forwardRef<HTMLElement, TooltipProps>(
  function Tooltip(props: TooltipProps, ref: any) {
    return <TooltipStyle ref={ref} tabIndex={-1} {...props} />
  },
)
