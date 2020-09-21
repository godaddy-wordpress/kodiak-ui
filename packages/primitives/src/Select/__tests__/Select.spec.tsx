import * as React from 'react'
import serializer from 'jest-emotion'
import renderer from 'react-test-renderer'
import { Select } from '../Select'

expect.addSnapshotSerializer(serializer)

describe('Select', () => {
  it('should render the Select component as a select element', () => {
    expect(
      renderer
        .create(
          <Select defaultValue="Hello">
            <option>Hello</option>
            <option>Hi</option>
            <option>Beep</option>
            <option>Boop</option>
          </Select>,
        )
        .toJSON(),
    ).toMatchInlineSnapshot(`
      .emotion-2 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
      }

      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
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
      }

      .emotion-1 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        fill: currentColor;
        color: black;
        display: block;
        -webkit-align-self: center;
        -ms-flex-item-align: center;
        align-self: center;
        margin-left: -28px;
        color: text;
        height: 16px;
        width: 16px;
      }

      <div
        className="emotion-2"
      >
        <select
          className="emotion-0"
          defaultValue="Hello"
        >
          <option>
            Hello
          </option>
          <option>
            Hi
          </option>
          <option>
            Beep
          </option>
          <option>
            Boop
          </option>
        </select>
        <svg
          className="emotion-1"
          viewBox="0 0 16 16"
        >
          <title />
          <desc />
          <path
            d="M11.912 5.754a.62.62 0 0 0-.25-.186.883.883 0 0 0-.344-.068H4.682c-.12 0-.24.024-.344.068a.62.62 0 0 0-.25.186.398.398 0 0 0-.088.252.405.405 0 0 0 .098.25l3.318 4.004c.061.073.147.134.249.176A.886.886 0 0 0 8 10.5a.886.886 0 0 0 .335-.064.633.633 0 0 0 .249-.176l3.318-4.004a.405.405 0 0 0 .098-.25.398.398 0 0 0-.088-.252z"
          />
        </svg>
      </div>
    `)
  })
})
