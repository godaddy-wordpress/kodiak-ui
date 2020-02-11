import * as React from 'react'
import serializer from 'jest-emotion'
import renderer from 'react-test-renderer'
import { render, fireEvent } from '@testing-library/react'
import { Label } from '../../'
import { Switch } from '../'

expect.addSnapshotSerializer(serializer)

describe('Switch', () => {
  it('should toggle when clicking', () => {
    const handleChange = jest.fn()

    const { queryByLabelText } = render(
      <Label>
        <Switch onChange={handleChange} />
        the switch
      </Label>,
    )
    const switchControl = queryByLabelText('the switch') as HTMLElement
    expect(switchControl).toBeDefined()

    fireEvent.click(switchControl)
    expect(handleChange).toBeCalledTimes(1)
  })

  it('should render the switch', () => {
    expect(renderer.create(<Switch checked={true} />).toJSON())
      .toMatchInlineSnapshot(`
      .emotion-3 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        display: -webkit-inline-box;
        display: -webkit-inline-flex;
        display: -ms-inline-flexbox;
        display: inline-flex;
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
        height: 1px;
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
      }

      .emotion-2 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        opacity: 1;
        -webkit-transition: background-color 0.1s cubic-bezier(0.4,1,0.75,0.9);
        transition: background-color 0.1s cubic-bezier(0.4,1,0.75,0.9);
        width: 28px;
        height: 16px;
        border-radius: full;
        border-style: solid;
        border-width: 1px;
        display: -webkit-inline-box;
        display: -webkit-inline-flex;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      input:focus ~ .emotion-2 {
        outline-width: 1px;
        outline-offset: 2px;
        outline-style: solid;
        outline-color: primary;
      }

      input:checked ~ .emotion-2 {
        background-color: primary;
        border-color: primary;
      }

      input:not(:checked) ~ .emotion-2 {
        background-color: muted;
        border-color: muted;
      }

      .emotion-1 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        border-radius: full;
        width: 12px;
        height: 12px;
        margin-left: 1px;
        background-color: background;
        -webkit-transform: translateX(calc(100% - 1px));
        -ms-transform: translateX(calc(100% - 1px));
        transform: translateX(calc(100% - 1px));
        -webkit-transition: -webkit-transform 0.1s cubic-bezier(0.4,1,0.75,0.9);
        -webkit-transition: transform 0.1s cubic-bezier(0.4,1,0.75,0.9);
        transition: transform 0.1s cubic-bezier(0.4,1,0.75,0.9);
      }

      <div
        className="emotion-3"
      >
        <input
          checked={true}
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
      </div>
    `)
  })
})
