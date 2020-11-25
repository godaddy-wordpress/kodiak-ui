import * as React from 'react'
import serializer from '@emotion/jest'
import renderer from 'react-test-renderer'
import { Button } from '../Button'
import { renderHook } from '@testing-library/react-hooks'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { useEventLoggerReducers } from '@kodiak-ui/hooks/use-event-logger'

expect.addSnapshotSerializer(serializer)

describe('Button', () => {
  it('should render the Button as a button element', () => {
    expect(renderer.create(<Button>Rendering button</Button>).toJSON())
      .toMatchInlineSnapshot(`
      .emotion-0 {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        cursor: pointer;
        display: inline-block;
        font-size: inherit;
        line-height: inherit;
        text-align: center;
        -webkit-text-decoration: none;
        text-decoration: none;
        -webkit-transition: background 0.2s ease-in-out,border 0.2s ease-in-out;
        transition: background 0.2s ease-in-out,border 0.2s ease-in-out;
        padding-left: 16px;
        padding-right: 16px;
        padding-top: 8px;
        padding-bottom: 8px;
        color: white;
        background-color: primary;
        border: 0;
        border-radius: default;
      }

      .emotion-0:hover {
        background-color: secondary;
      }

      <button
        className="emotion-0"
        onClick={[Function]}
      >
        Rendering button
      </button>
    `)
  })

  it('should style the element with the `sx` prop', () => {
    expect(
      renderer
        .create(
          <Button sx={{ bg: 'black', color: 'white' }}>Default button</Button>,
        )
        .toJSON(),
    ).toMatchInlineSnapshot(`
      .emotion-0 {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        cursor: pointer;
        display: inline-block;
        font-size: inherit;
        line-height: inherit;
        text-align: center;
        -webkit-text-decoration: none;
        text-decoration: none;
        -webkit-transition: background 0.2s ease-in-out,border 0.2s ease-in-out;
        transition: background 0.2s ease-in-out,border 0.2s ease-in-out;
        padding-left: 16px;
        padding-right: 16px;
        padding-top: 8px;
        padding-bottom: 8px;
        color: white;
        background-color: primary;
        border: 0;
        border-radius: default;
        background-color: black;
        color: white;
      }

      .emotion-0:hover {
        background-color: secondary;
      }

      <button
        className="emotion-0"
        onClick={[Function]}
      >
        Default button
      </button>
    `)
  })

  it('should style the element with styled-system props', () => {
    expect(
      renderer.create(<Button sx={{ mr: 1 }}>Default button</Button>).toJSON(),
    ).toMatchInlineSnapshot(`
      .emotion-0 {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        cursor: pointer;
        display: inline-block;
        font-size: inherit;
        line-height: inherit;
        text-align: center;
        -webkit-text-decoration: none;
        text-decoration: none;
        -webkit-transition: background 0.2s ease-in-out,border 0.2s ease-in-out;
        transition: background 0.2s ease-in-out,border 0.2s ease-in-out;
        padding-left: 16px;
        padding-right: 16px;
        padding-top: 8px;
        padding-bottom: 8px;
        color: white;
        background-color: primary;
        border: 0;
        border-radius: default;
        margin-right: 4px;
      }

      .emotion-0:hover {
        background-color: secondary;
      }

      <button
        className="emotion-0"
        onClick={[Function]}
      >
        Default button
      </button>
    `)
  })

  it('should logging events', () => {
    const myOnClickHandler = jest.fn()
    let log = []
    renderHook(() =>
      useEventLoggerReducers({
        initialEventReducers: [
          event => {
            log = [...log, event]
            return event
          },
        ],
      }),
    )

    const { getByText } = render(
      <Button onClick={myOnClickHandler}>Click me</Button>,
    )

    fireEvent.click(getByText('Click me'))

    expect(myOnClickHandler).toBeCalledTimes(1)
    expect(log.length).toBe(1)

    const unloggedOnClick = jest.fn()
    const { getByText: getByText2 } = render(
      <Button onClick={unloggedOnClick} eventLog={false}>
        No logging
      </Button>,
    )

    fireEvent.click(getByText2('No logging'))
    expect(unloggedOnClick).toBeCalledTimes(1)
    expect(log.length).toBe(1)
  })
})
