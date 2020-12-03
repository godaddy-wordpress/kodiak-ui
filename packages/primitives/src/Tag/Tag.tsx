import * as React from 'react'
import {
  forwardRef,
  DetailedHTMLProps,
  AllHTMLAttributes,
  ReactNode,
} from 'react'
import { KodiakUIProps, ThemeUIStyleObject } from 'kodiak-ui'
import { Box } from '../Box'
import { CloseButton } from '../Button'

export type TagElements = 'root' | 'button'

export type TagStyles = {
  styles?: {
    [K in TagElements]?: ThemeUIStyleObject
  }
}

export function useTagStyles(styles: TagStyles) {
  return styles
}

export type TagProps = {
  children: ReactNode
  isDismissible?: boolean
  styles?: TagStyles
  onDismiss?: (event: any) => void

  renderButton?: () => void
} & DetailedHTMLProps<AllHTMLAttributes<HTMLElement>, HTMLElement> &
  KodiakUIProps

export const Tag = forwardRef<TagProps, any>(
  (
    {
      base,
      children,
      isDismissible,
      onDismiss,
      styles,
      sx,
      renderButton: renderButtonProp,
      ...props
    },
    ref,
  ) => {
    function defaultRenderButton() {
      return isDismissible ? (
        <CloseButton
          onClick={event => onDismiss?.(event)}
          sx={{ borderRadius: 0, ...styles?.button }}
        />
      ) : null
    }

    function renderButton() {
      return renderButtonProp?.() || defaultRenderButton()
    }

    return (
      <Box
        ref={ref}
        base={base || 'tag'}
        sx={{ ...styles?.root, ...sx }}
        {...props}
      >
        {children}
        {renderButton()}
      </Box>
    )
  },
)
