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
  return imageSrc ? (
    <Image src={imageSrc} sx={{ borderRadius: 'full', ...sx }} alt={text} />
  ) : (
    <Box
      sx={{
        borderRadius: 'full',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...sx,
      }}
    >
      {text}
    </Box>
  )
}
