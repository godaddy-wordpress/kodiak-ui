import * as React from 'react'
import styled from '@emotion/styled'

const StyledSpan = styled('span')<{ isOpen?: boolean }>({}, ({ isOpen }) => ({
  ...(isOpen
    ? null
    : {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: '1px',
        margin: '-1px',
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        width: '1px',

        // https://medium.com/@jessebeach/beware-smushed-off-screen-accessible-text-5952a4c2cbfe
        whiteSpace: 'nowrap',
        wordWrap: 'normal',
      }),
}))

export type VisuallyHiddenProps = {
  children: React.ReactNode
  isOpen?: boolean
} & React.HTMLAttributes<HTMLSpanElement>

export const VisuallyHidden = React.forwardRef<
  HTMLSpanElement,
  VisuallyHiddenProps
>(({ isOpen = false, children, ...props }, ref) => (
  <StyledSpan ref={ref} isOpen={isOpen} {...props}>
    {React.Children.map(
      children,
      child =>
        child &&
        React.cloneElement(child as any, {
          isOpen,
        }),
    )}
  </StyledSpan>
))
