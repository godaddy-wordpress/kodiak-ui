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
      .emotion-2 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        padding-left: 128px;
        margin-right: 32px;
        margin-bottom: 32px;
        opacity: 1;
        font-size: default;
        display: -webkit-inline-box;
        display: -webkit-inline-flex;
        display: -ms-inline-flexbox;
        display: inline-flex;
        min-height: none;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-flex-shrink: 0;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        position: relative;
        cursor: pointer;
        text-transform: none;
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
        z-index: -1;
      }

      .emotion-1 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        margin-left: -38px;
        margin-right: 8px;
        opacity: 1;
        display: inline-block;
        height: 16px;
        width: 28px;
        border-style: solid;
        border-width: 1px;
        border-radius: 40px;
        position: relative;
        -webkit-transition: background-color 0.1s cubic-bezier(0.4,1,0.75,0.9);
        transition: background-color 0.1s cubic-bezier(0.4,1,0.75,0.9);
      }

      input:focus ~ .emotion-1 {
        outline-width: 2px;
        outline-style: solid;
        outline-offset: 2px;
      }

      .emotion-1::before {
        border-radius: 50%;
        content: "";
        display: block;
        height: 12px;
        width: 12px;
        position: absolute;
        top: 50%;
        left: 1px;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        -webkit-transition: left 0.1s cubic-bezier(0.4,1,0.75,0.9);
        transition: left 0.1s cubic-bezier(0.4,1,0.75,0.9);
      }

      <label
        className="emotion-2"
      >
        <input
          className="emotion-0"
          type="checkbox"
        />
        <span
          className="emotion-1"
        />
        Toggle this
      </label>
    `)
  })
})
