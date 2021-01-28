import { useLayoutEffect, useEffect } from 'react'

export function hasKey<O>(
  obj: O,
  key: string | number | symbol,
): key is keyof O {
  return key in obj
}

/**
 * Small wrapper around `useLayoutEffect` to get rid of the warning on SSR envs
 * https://github.com/popperjs/react-popper/blob/a5ce0a201adca114d30a10dc1c321dd5669ea2c8/src/utils.js#L47
 */
export const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
    ? useLayoutEffect
    : useEffect
