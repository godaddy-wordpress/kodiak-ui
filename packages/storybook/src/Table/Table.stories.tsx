import * as React from 'react'
import { useTable, HeaderProps } from '@kodiak-ui/table'

export default { title: 'Table' }

export function Initial() {
  const columns = React.useMemo(
    () => [
      {
        Cell: 'Name',
        accessor: 'name', // accessor is the "key" in the data
      },
      {
        Cell: <span>💼 Job title</span>,
        accessor: 'jobTitle',
      },
    ],
    [],
  )

  const data = React.useMemo(
    () => [
      {
        name: 'Michael Scott',
        jobTitle: 'Regional Manager',
      },
      {
        name: 'Dwight Schrute',
        jobTitle: 'Assistant to the Regional Manager',
      },
    ],
    [],
  )

  const { register, headers, rows } = useTable<{
    name: string
    jobTitle: string
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
            {headers.map(({ key, ...header }: HeaderProps) => (
              <th key={key} {...header} />
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(({ id, cells }) => (
            <tr key={id}>
              {cells.map(cell => (
                <td key={cell}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
