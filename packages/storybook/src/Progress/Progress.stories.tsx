import * as React from 'react'
import { Progress } from '@kodiak-ui/progress'

export default { title: 'Progress' }

export function Initial() {
  return <Progress value={882} min={0} max={1000} />
}
