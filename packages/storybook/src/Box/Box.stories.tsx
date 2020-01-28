/** @jsx jsx */

import { jsx } from 'theme-ui'

export default { title: 'Box' }

export const withText = () => (
  <div
    sx={{
      fontFamily: 'body',
      fontWeight: 'bold',
    }}
  >
    Hello Button
  </div>
)
