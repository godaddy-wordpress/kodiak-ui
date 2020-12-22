import { get, merge } from '.'
import { Theme } from './types'

/**
 * Accepts a mode name and will look for it in the theme
 * and merge the mode and base theme together
 *
 * @param mode string
 */
export function applyMode(mode: string) {
  return function (theme: Theme) {
    if (!mode) {
      return theme
    }

    const modes = get(theme, 'modes', {})

    return merge.all({}, theme, {
      ...get(modes, mode, {}),
    })
  }
}
