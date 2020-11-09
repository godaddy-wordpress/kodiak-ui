import * as React from 'react'
import styled from '@emotion/styled'

const StyledSpan = styled('span')<{ isVisible?: boolean }>(
  {},
  ({ isVisible }) => ({
    ...(isVisible
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
  }),
)

export type VisuallyHiddenProps = {
  children: React.ReactNode
  isVisible?: boolean
} & React.HTMLAttributes<HTMLSpanElement>

export const VisuallyHidden = React.forwardRef<
  HTMLSpanElement,
  VisuallyHiddenProps
>(({ isVisible = false, children, ...props }, ref) => (
  <StyledSpan ref={ref} isVisible={isVisible} {...props}>
    {React.Children.map(
      children,
      child =>
        child &&
        React.cloneElement(child as any, {
          isVisible,
        }),
    )}
  </StyledSpan>
))
