import * as React from 'react'
import { Image } from 'theme-ui'
import { SxStyleProp } from '@kodiak-ui/core'
import { Box } from '../Box'

export type AvatarProps = {
  imageSrc?: string
  text: string
  sx?: SxStyleProp
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
