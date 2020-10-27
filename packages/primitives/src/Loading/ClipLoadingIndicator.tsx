import * as React from 'react'
import { keyframes } from '@emotion/core'
import { VariantProps } from 'kodiak-ui'
import { Box } from '../Box'

const clipAnimation = keyframes`
  0% {transform: rotate(0deg) scale(1)}
  50% {transform: rotate(180deg) scale(0.8)}
  100% {transform: rotate(360deg) scale(1)}
`

export type ClipLoadingIndicatorProps = VariantProps

export function ClipLoadingIndicator({
  variant = 'clip',
  variantKey = 'loadingIndicators',
  ...props
}: ClipLoadingIndicatorProps) {
  return (
    <Box
      __base={{
        bg: 'transparent',
        width: '16px',
        height: '16px',
        borderRadius: '100%',
        border: '2px solid',
        borderColor: 'primary',
        borderBottomColor: 'transparent',
        display: 'inline-block',
        animation: `${clipAnimation} 0.75s 0s infinite linear`,
        animationFillMode: 'both',
      }}
      variant={variant}
      variantKey={variantKey}
      {...props}
    />
  )
}
