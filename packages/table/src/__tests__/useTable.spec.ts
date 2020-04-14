import { renderHook, act } from '@testing-library/react-hooks'
import { useTable } from '../useTable'

describe('useTable', () => {
  it('should return mapped headers and rows', () => {
    const columns = [
      {
        Cell: 'Character',
        accessor: 'character',
      },
      {
        Cell: 'Portrayed by',
        accessor: 'portrayedBy',
      },
      {
        Cell: 'Job title',
        accessor: 'jobTitle',
      },
    ]

    const data = [
      {
        character: 'Michael Scott',
        portrayedBy: 'Steve Carrel',
        jobTitle: 'Regional Manager',
      },
    ]

    const { result } = renderHook(() =>
      useTable<{ character: string; portrayedBy: string; jobTitle: string }>({
        columns,
        data,
      }),
    )

    expect(result.current.headers).toEqual([
      {
        accessor: 'character',
        children: 'Character',
        key: '0',
        scope: 'col',
      },
      {
        accessor: 'portrayedBy',
        children: 'Portrayed by',
        key: '1',
        scope: 'col',
      },
      {
        accessor: 'jobTitle',
        children: 'Job title',
        key: '2',
        scope: 'col',
      },
    ])

    expect(result.current.rows).toEqual([
      {
        cells: [
          { children: 'Michael Scott', key: '0' },
          { children: 'Steve Carrel', key: '1' },
          { children: 'Regional Manager', key: '2' },
        ],
        key: '0',
        rowIndex: 0,
      },
    ])

    expect(result.current.register).toBeDefined()
  })

  it('should add the appropriate HTML attributes to the table element', () => {})
})
