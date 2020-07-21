import * as React from 'react'
import serializer from 'jest-emotion'
import renderer from 'react-test-renderer'
import { Label } from '../../Label'
import { Checkbox } from '../Checkbox'

expect.addSnapshotSerializer(serializer)

describe('Checkbox', () => {
  it('should render the checked checkbox input', () => {
    expect(
      renderer
        .create(
          <Label display="flex" alignItems="center">
            <Checkbox name="dark-mode" defaultChecked={true} />
            Dark Mode
          </Label>,
        )
        .toJSON(),
    ).toMatchInlineSnapshot(`
      .emotion-3 {
        box-sizing: border-box;
        display: inline-block;
        margin: 0;
        min-width: 0;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      .emotion-2 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
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
        height: 1px;
        position: absolute;
        opacity: 0;
        overflow: hidden;
        width: 1px;
        z-index: -1;
      }

      .emotion-1 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        fill: currentColor;
        color: black;
        display: block;
        height: 16px;
        width: 16px;
        color: primary;
        display: block;
      }

      input:focus ~ .emotion-1 {
        outline: 1px auto;
        outline-offset: 1px;
        outline-color: primary;
      }

      <label
        className="emotion-3"
      >
        <div
          className="emotion-2"
        >
          <input
            checked={true}
            className="emotion-0"
            onChange={[Function]}
            type="checkbox"
          />
          <svg
            aria-hidden={true}
            className="emotion-1"
            viewBox="0 0 16 16"
          >
            <title>
              Checkbox input checked
            </title>
            <desc />
            <path
              d="M0 3a3 3 0 013-3h10a3 3 0 013 3v10a3 3 0 01-3 3H3a3 3 0 01-3-3V3z"
              fill="#0076D1"
            />
            <path
              clipRule="evenodd"
              d="M13 1H3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zM3 0a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V3a3 3 0 00-3-3H3z"
              fill="currentColor"
              fillRule="evenodd"
            />
            <path
              d="M12.937 5.062L11.7 3.815a.222.222 0 00-.313 0L6.165 9.068a.221.221 0 01-.314 0L4.615 7.822a.221.221 0 00-.314 0L3.065 9.068a.223.223 0 000 .315l2.786 2.802a.222.222 0 00.314 0l6.772-6.812a.223.223 0 000-.311z"
              fill="#fff"
            />
          </svg>
        </div>
        Dark Mode
      </label>
    `)
  })

  it('should render the unchecked radio input', () => {
    expect(
      renderer
        .create(
          <Label display="flex" alignItems="center">
            <Checkbox name="dark-mode" />
            Light Mode
          </Label>,
        )
        .toJSON(),
    ).toMatchInlineSnapshot(`
      .emotion-3 {
        box-sizing: border-box;
        display: inline-block;
        margin: 0;
        min-width: 0;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      .emotion-2 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
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
        height: 1px;
        position: absolute;
        opacity: 0;
        overflow: hidden;
        width: 1px;
        z-index: -1;
      }

      .emotion-1 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        fill: currentColor;
        color: black;
        display: block;
        height: 16px;
        width: 16px;
        color: defaultGray;
        display: block;
      }

      input:focus ~ .emotion-1 {
        outline: 1px auto;
        outline-offset: 1px;
        outline-color: primary;
      }

      <label
        className="emotion-3"
      >
        <div
          className="emotion-2"
        >
          <input
            checked={false}
            className="emotion-0"
            onChange={[Function]}
            type="checkbox"
          />
          <svg
            aria-hidden={true}
            className="emotion-1"
            viewBox="0 0 16 16"
          >
            <title>
              Checkbox input unchecked
            </title>
            <desc />
            <path
              d="M0 3a3 3 0 013-3h10a3 3 0 013 3v10a3 3 0 01-3 3H3a3 3 0 01-3-3V3z"
              fill="#fff"
            />
            <path
              clipRule="evenodd"
              d="M13 1H3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zM3 0a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V3a3 3 0 00-3-3H3z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
        </div>
        Light Mode
      </label>
    `)
  })
})
