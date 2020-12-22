import { get, merge } from '.'
import { Theme } from './types'

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
