import * as React from 'react'
import { Image, SxProps } from 'theme-ui'
import {
  variant,
  VariantProps,
  styled,
  css,
  sx,
  Theme,
  SerializedStyles,
} from '@kodiak-ui/core'
import { Box } from '../Box'

export type AvatarProps = {
  imageSrc?: string
  text: string
  sx?: SxProps
}

export function Avatar({ imageSrc, text, sx = {} }: AvatarProps) {
  const mergedSx = { borderRadius: 'full', ...sx }

  return imageSrc ? (
    <Image src={imageSrc} sx={mergedSx} alt={text} />
  ) : (
    <Box sx={mergedSx}>{text}</Box>
  )
}
