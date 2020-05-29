/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from 'react'
import { Box } from '@kodiak-ui/primitives'
import { css, keyframes } from '@emotion/core'

type SkeletonProps = { duration?: number } & React.ComponentProps<typeof Box>

// based on https://github.com/dvtng/react-loading-skeleton

export const skeletonKeyframes = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`

const skeletonColor = '#eee'
const defaultHighlightColor = '#f5f5f5'

const skeletonBaseStyles = {
  backgroundColor: skeletonColor,
  backgroundImage: `linear-gradient(
      90deg,
      ${skeletonColor},
      ${defaultHighlightColor},
      ${skeletonColor}
    )`,
  backgroundSize: `200px 100%`,
  backgroundRepeat: `no-repeat`,
  borderRadius: 'default',
  display: 'inline-block',
  lineHeight: 1,
  width: '100%',
}

type RepeatProps = { count?: number; children: React.ReactNode }

export function Repeat({ count = 1, children }: RepeatProps) {
  const lines = new Array(count).fill(null)

  return (
    <React.Fragment>
      {lines.map((_, index) => {
        return <React.Fragment key={index}>{children}</React.Fragment>
      })}
    </React.Fragment>
  )
}

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  function Skeleton(
    { variantKey = 'skeletons', variant, duration = '1.2s', ...props },
    forwardedRef,
  ) {
    return (
      <Box
        __base={skeletonBaseStyles}
        ref={forwardedRef as any}
        variantKey={variantKey}
        variant={variant}
        css={
          duration &&
          css`
            animation: ${skeletonKeyframes} ${duration} ease-in-out infinite;
          `
        }
        {...props}
      >
        &zwnj;
      </Box>
    )
  },
)
