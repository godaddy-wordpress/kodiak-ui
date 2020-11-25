import * as React from 'react'
import serializer from '@emotion/jest'
import renderer from 'react-test-renderer'
import { Label } from '../../Label'
import { Checkbox } from '../Checkbox'

describe('Checkbox', () => {
  it('should render the checked checkbox input', () => {
    expect(
      renderer
        .create(
          <Label sx={{ display: 'flex', alignItems: 'center' }}>
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
            name="dark-mode"
            onChange={[Function]}
            type="checkbox"
          />
          <svg
            aria-hidden={true}
            className="emotion-1"
            height={16}
            viewBox="0 0 16 16"
            width={16}
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
        Dark Mode
      </label>
    `)
  })

  it('should render the unchecked radio input', () => {
    expect(
      renderer
        .create(
          <Label sx={{ display: 'flex', alignItems: 'center' }}>
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
            name="dark-mode"
            onChange={[Function]}
            type="checkbox"
          />
          <svg
            aria-hidden={true}
            className="emotion-1"
            height={16}
            viewBox="0 0 16 16"
            width={16}
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
