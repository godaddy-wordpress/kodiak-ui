import { ThemeUIStyleObject } from 'kodiak-ui'
import React, { useMemo } from 'react'
import Transition from 'react-transition-group/Transition'

const StateMap = {
  entering: false,
  entered: true,
}

export function useOpenTransition({ isOpen }: { isOpen: boolean }) {
  const styles = useMemo(
    (): ThemeUIStyleObject => ({
      transition:
        'opacity 0.2s cubic-bezier(0, 0, 0.4, 1) 0.1s, transform 0.2s cubic-bezier(0, 0, 0.4, 1) 0.1s',
      opacity: isOpen ? 1 : 0,
      transform: isOpen ? 'translateY(0px)' : 'translateY(8px)',
    }),
    [isOpen],
  )

  return { styles }
}

/**
 * Timeout issues adding css animations to enter may be related to
 * https://github.com/reactjs/react-transition-group/issues/189 or
 * https://github.com/reactjs/react-transition-group/issues/22
 * my VM isn't good enough to debug accurately and get a better answer.
 *
 * As a result, use enter 0 so that is-open is applied once entered
 * it doesn't matter if we know when the css-animation is done on entering
 * for exiting though, give time for the css-animation to play
 * before removing from the DOM
 * **note** hitting esc bypasses exit animation for anyone testing.
 */

export function OpenTransition(props) {
  return (
    <Transition timeout={{ enter: 0, exit: 350 }} {...props}>
      {state =>
        React.Children.map(
          props.children,
          child =>
            child &&
            React.cloneElement(child, {
              isOpen: !!StateMap?.[state],
            }),
        )
      }
    </Transition>
  )
}
