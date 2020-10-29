import * as React from 'react'
import { keyframes } from '@emotion/core'
import {
  _variant,
  VariantProps,
  styled,
  css,
  sx,
  Theme,
  getVariants,
} from 'kodiak-ui'
import { Box } from '../Box'
import { KodiakUIProps } from 'kodiak-ui/src'

const loadingDotAnimations = keyframes`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`

type LoadingDotProps = {
  delay: number
  size: number
  offset: boolean
}

function LoadingDot({ delay, size, offset }: LoadingDotProps) {
  return (
    <Box
      as="span"
      sx={{
        animation: `${loadingDotAnimations} 1s ease-in-out ${delay}ms infinite;`,
        backgroundColor: 'currentColor',
        borderRadius: size,
        display: 'inline-block',
        marginLeft: `${size / 2}px`,
        height: size,
        width: size,
      }}
    />
  )
}

export type DotLoadingIndicatorProps = {
  size?: number
  delay?: number
} & KodiakUIProps

function base({ theme }: { theme: Theme }) {
  return css({
    label: 'loadingIndicator',
    display: 'flex',
    transition: 'color 150ms',
    lineHeight: 1,
    marginLeft: 1,
    alignSelf: 'center',
    textAlign: 'center',
  })(theme)
}

const variants = ({
  variant: variantProp = 'default',
  variantKey = 'loadingIndicators',
  variants,
  theme,
}) => {
  if (variants) {
    return getVariants(variants)(theme)
  }

  return _variant({ variant: variantProp, theme, variantKey, variants })
}

const LoadingIndicatorStyle = styled('div')<DotLoadingIndicatorProps>(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  base,
  variants,
  sx,
)

export function DotLoadingIndicator({
  size = 4,
  delay = 160,
  ...rest
}: DotLoadingIndicatorProps) {
  return (
    <LoadingIndicatorStyle {...rest}>
      <LoadingDot delay={0} size={size} offset={true} />
      <LoadingDot delay={delay} size={size} offset />
      <LoadingDot delay={delay * 2} size={size} offset={false} />
    </LoadingIndicatorStyle>
  )
}
