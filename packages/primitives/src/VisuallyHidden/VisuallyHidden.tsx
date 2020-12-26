import * as React from 'react'
import { styled } from 'kodiak-ui'

const StyledSpan = styled('span')({
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
})

export type VisuallyHiddenProps = {
  children: React.ReactNode
} & React.HTMLAttributes<HTMLSpanElement>

export const VisuallyHidden = React.forwardRef<
  HTMLSpanElement,
  VisuallyHiddenProps
>(({ children, ...props }, ref) => (
  <StyledSpan ref={ref} {...props}>
    {children}
  </StyledSpan>
))
