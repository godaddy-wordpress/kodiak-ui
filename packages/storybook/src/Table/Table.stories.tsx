import * as React from 'react'
import { useTable } from '@kodiak-ui/table'

export default { title: 'Table' }

export function Initial() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Column 1',
        accessor: 'col1', // accessor is the "key" in the data
      },
      {
        Header: 'Column 2',
        accessor: 'col2',
      },
    ],
    [],
  )

  const data = React.useMemo(
    () => [
      {
        col1: 'Hello',
        col2: 'World',
      },
      {
        col1: 'react-table',
        col2: 'rocks',
      },
      {
        col1: 'whatever',
        col2: 'you want',
      },
    ],
    [],
  )

  const { register } = useTable<{
    col1: string
    col2: string
  }>({
    columns,
    data,
  })

  const labelRef = React.useRef<HTMLHeadingElement>(null)

  return (
    <>
      <h1 ref={labelRef} id="Testing">
        Table example
      </h1>
      <table ref={node => register(node, { describedby: labelRef })}>
        <thead>
          <tr>
            <th>Header 1</th>
            <th>Header 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Value 1</td>
            <td>Value 2</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
