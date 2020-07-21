import * as React from 'react'

export type UseControlledProps<T> = {
  controlled: T
  default: T
  name: string
  state: string
}

export function useControlled<T>({
  controlled,
  default: defaultProp,
  name,
  state = 'value',
}: UseControlledProps<T>): [T, (newValue: T) => void] {
  const { current: isControlled } = React.useRef(controlled !== undefined)
  const [valueState, setValue] = React.useState<T>(defaultProp)
  const value = isControlled ? controlled : valueState
  const { current: defaultValue } = React.useRef<T>(defaultProp)

  React.useEffect(
    function warnWhenSwitchUncontrolledToControlled() {
      if (process.env.NODE_ENV !== 'production') {
        if (isControlled !== (controlled !== undefined)) {
          console.error(
            [
              `Kodiak-UI: A component is changing the ${
                isControlled ? '' : 'un'
              }controlled ${state} state of ${name} to be ${
                isControlled ? 'un' : ''
              }controlled.`,
              'Elements should not switch from uncontrolled to controlled (or vice versa).',
              `Decide between using a controlled or uncontrolled ${name} ` +
                'element for the lifetime of the component.',
              "The nature of the state is determined during the first render, it's considered controlled if the value is not `undefined`.",
              'More info: https://fb.me/react-controlled-components',
            ].join('\n'),
          )
        }
      }
    },
    [controlled, isControlled, state, name],
  )

  React.useEffect(
    function warnWhenChangingStateOfUncontrolled() {
      if (!isControlled && defaultValue !== defaultProp) {
        console.error(
          [
            `Kodiak-UI: A component is changing the default ${state} state of an uncontrolled ${name} after being initialized. ` +
              `To suppress this warning opt to use a controlled ${name}.`,
          ].join('\n'),
        )
      }
    },
    [defaultProp, defaultValue, isControlled, name, state],
  )

  const setValueIfUncontrolled = React.useCallback(
    function setValueIfUncontrolled(newValue: T) {
      if (!isControlled) {
        setValue(newValue)
      }
    },
    [isControlled],
  )

  return [value, setValueIfUncontrolled]
}
