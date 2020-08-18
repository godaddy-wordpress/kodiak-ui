import * as React from 'react'
import { Progress, ProgressThumb } from '@kodiak-ui/progress'

export default { title: 'Progress', component: Progress }

export function Static() {
  return (
    <Progress value={882} min={0} max={1000}>
      <ProgressThumb value={882} min={0} max={1000} />
    </Progress>
  )
}
