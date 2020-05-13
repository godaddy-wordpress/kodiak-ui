import * as React from 'react'
import { DotLoadingIndicator } from '@kodiak-ui/primitives'

import { withA11y } from '@storybook/addon-a11y'

export default { title: 'Primitives/Loading', decorators: [withA11y] }

export function dotInitial() {
  return <DotLoadingIndicator />
}

export function dotCustomized() {
  return <DotLoadingIndicator sx={{ color: 'blue.3' }} size={16} delay={320} />
}
