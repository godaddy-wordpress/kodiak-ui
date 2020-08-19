import * as React from 'react'
import { renderHook } from '@testing-library/react-hooks'
import { useTable } from '../useTable'
import { render } from '@testing-library/react'

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

function Table() {
  const { headers, rows, getTableProps } = useTable({
    columns,
    data,
    describedby: 'LabelId',
  })

  return (
    <>
      <h1 id="LabelId" data-testid="describedByLabel">
        Table example
      </h1>
      <table data-testid="table" {...getTableProps()}>
        <thead>
          <tr>
            {headers.map(({ key, ...header }) => (
              <th key={key} {...header} />
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(({ cells }, index) => (
            <tr key={index}>
              {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                cells.map(({ key, rowData, ...cell }) => (
                  <td key={key} {...cell} />
                ))
              }
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

function TableWithLabelRef() {
  const labelRef = React.useRef<HTMLHeadingElement>(null)
  const { headers, rows, getTableProps } = useTable({
    columns,
    data,
    describedby: labelRef,
  })

  return (
    <>
      <h1 ref={labelRef} id="LabelId">
        Table example
      </h1>
      <table data-testid="table" {...getTableProps()}>
        <thead>
          <tr>
            {headers.map(({ key, ...header }) => (
              <th key={key} {...header} />
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(({ cells }, index) => (
            <tr key={index}>
              {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                cells.map(({ key, rowData, ...cell }) => (
                  <td key={key} {...cell} />
                ))
              }
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

describe('useTable', () => {
  it('should return mapped headers and rows', () => {
    const { result } = renderHook(() =>
      useTable<{ character: string; portrayedBy: string; jobTitle: string }>({
        columns,
        data,
      }),
    )

    expect(result.current.headers).toMatchInlineSnapshot(`
      Array [
        Object {
          "children": "Character",
          "column": Object {
            "Cell": "Character",
            "accessor": "character",
          },
          "key": "0",
          "scope": "col",
        },
        Object {
          "children": "Portrayed by",
          "column": Object {
            "Cell": "Portrayed by",
            "accessor": "portrayedBy",
          },
          "key": "1",
          "scope": "col",
        },
        Object {
          "children": "Job title",
          "column": Object {
            "Cell": "Job title",
            "accessor": "jobTitle",
          },
          "key": "2",
          "scope": "col",
        },
      ]
    `)

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { rowData, ...row } = result.current.rows[0]

    expect(row).toMatchInlineSnapshot(`
      Object {
        "cells": Array [
          Object {
            "children": "Michael Scott",
            "column": Object {
              "Cell": "Character",
              "accessor": "character",
            },
            "key": "0",
            "rowData": Object {
              "character": "Michael Scott",
              "jobTitle": "Regional Manager",
              "portrayedBy": "Steve Carrel",
            },
          },
          Object {
            "children": "Steve Carrel",
            "column": Object {
              "Cell": "Portrayed by",
              "accessor": "portrayedBy",
            },
            "key": "1",
            "rowData": Object {
              "character": "Michael Scott",
              "jobTitle": "Regional Manager",
              "portrayedBy": "Steve Carrel",
            },
          },
          Object {
            "children": "Regional Manager",
            "column": Object {
              "Cell": "Job title",
              "accessor": "jobTitle",
            },
            "key": "2",
            "rowData": Object {
              "character": "Michael Scott",
              "jobTitle": "Regional Manager",
              "portrayedBy": "Steve Carrel",
            },
          },
        ],
        "key": "0",
        "rowIndex": 0,
      }
    `)
  })

  it('should add the appropriate HTML attributes to the table element with string ID passed to describedby', () => {
    const { getByTestId } = render(<Table />)

    expect(getByTestId('table').getAttribute('aria-describedby')).toEqual(
      'LabelId',
    )
  })

  it('should add the appropriate HTML attributes to the table element with ref passed to describedby', () => {
    const { getByTestId } = render(<TableWithLabelRef />)

    expect(getByTestId('table').getAttribute('aria-describedby')).toEqual(
      'LabelId',
    )
  })
})
