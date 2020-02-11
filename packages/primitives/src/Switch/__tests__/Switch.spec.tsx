import * as React from 'react'
import serializer from 'jest-emotion'
import renderer from 'react-test-renderer'
import { render, fireEvent } from '@testing-library/react'

import { Switch } from '../Switch'

expect.addSnapshotSerializer(serializer)

describe('Switch', () => {
  it('should toggle when clicking', () => {
    const handleChange = jest.fn()

    const { queryByLabelText } = render(
      <Switch onChange={handleChange} label="the switch" />,
    )
    const switchControl = queryByLabelText('the switch') as HTMLElement
    expect(switchControl).toBeDefined()

    fireEvent.click(switchControl)
    expect(handleChange).toBeCalledTimes(1)
  })

  it('should render the switch', () => {
    expect(renderer.create(<Switch label="Toggle this"></Switch>).toJSON())
      .toMatchInlineSnapshot(`
      .emotion-3 {
        box-sizing: border-box;
        display: inline-block;
        margin: 0;
        min-width: 0;
        opacity: 1;
        display: -webkit-inline-box;
        display: -webkit-inline-flex;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        position: relative;
        cursor: pointer;
      }

      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        display: block;
        width: 100%;
        padding: 8px;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        font-size: inherit;
        line-height: inherit;
        border: 1px solid;
        border-radius: default;
        color: inherit;
        background-color: transparent;
        opacity: 0;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
      }

      .emotion-2 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        margin-right: 8px;
        display: -webkit-inline-box;
        display: -webkit-inline-flex;
        display: -ms-inline-flexbox;
        display: inline-flex;
        width: 28px;
        height: 16px;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        border-radius: full;
        border-style: solid;
        border-width: 1px;
        -webkit-transition: background-color 0.1s cubic-bezier(0.4,1,0.75,0.9);
        transition: background-color 0.1s cubic-bezier(0.4,1,0.75,0.9);
      }

      input:focus ~ .emotion-2 {
        outline-width: 2px;
        outline-style: solid;
        outline-offset: 2px;
      }

      .emotion-1 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        margin-left: 1px;
        background-color: background;
        width: 12px;
        height: 12px;
        border-radius: full;
        -webkit-transform: translateX(0);
        -ms-transform: translateX(0);
        transform: translateX(0);
        -webkit-transition: -webkit-transform 0.1s cubic-bezier(0.4,1,0.75,0.9);
        -webkit-transition: transform 0.1s cubic-bezier(0.4,1,0.75,0.9);
        transition: transform 0.1s cubic-bezier(0.4,1,0.75,0.9);
      }

      <label
        className="emotion-3"
      >
        <input
          className="emotion-0"
          type="checkbox"
        />
        <div
          className="emotion-2"
        >
          <div
            className="emotion-1"
          />
        </div>
        Toggle this
      </label>
    `)
  })
})
