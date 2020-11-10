import * as React from 'react'
import serializer from 'jest-emotion'
import renderer from 'react-test-renderer'
import {
  Select,
  SelectLabel,
  SelectButton,
  SelectMenu,
  SelectMenuItem,
} from '../'

expect.addSnapshotSerializer(serializer)

describe('Text', () => {
  it('should render the Select as a div element', () => {
    expect(
      renderer
        .create(
          <Select>
            <SelectLabel>Choose a filter:</SelectLabel>
            <SelectButton isOpen={true}>Filter:</SelectButton>
            <SelectMenu variant="selectMenu">
              <SelectMenuItem item="Item 1">Item 1</SelectMenuItem>
              <SelectMenuItem item="Item 2">Item 2</SelectMenuItem>
            </SelectMenu>
          </Select>,
        )
        .toJSON(),
    ).toMatchInlineSnapshot(`
      .emotion-7 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        position: relative;
      }

      .emotion-0 {
        box-sizing: border-box;
        display: inline-block;
        margin: 0;
        min-width: 0;
      }

      .emotion-2 {
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

      .emotion-2:hover {
        background-color: secondary;
      }

      .emotion-1 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        fill: currentColor;
        display: block;
        color: text;
        height: 16px;
        -webkit-transform: rotate(-0.5turn);
        -ms-transform: rotate(-0.5turn);
        transform: rotate(-0.5turn);
        -webkit-transition: -webkit-transform 0.2s ease-in-out;
        -webkit-transition: transform 0.2s ease-in-out;
        transition: transform 0.2s ease-in-out;
        width: 16px;
      }

      .emotion-5 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        border-top: 0;
        background: white;
        box-shadow: default;
        border: 1px solid;
        border-color: muted;
        border-radius: default;
        list-style: none;
        margin: 0;
        max-height: 200px;
        min-width: 150px;
        max-width: 184px;
        overflow-y: auto;
        padding: 0;
        position: absolute;
        top: 0;
        left: 0;
      }

      .emotion-3 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        color: text;
        cursor: pointer;
        padding-top: 16px;
        padding-bottom: 16px;
        padding-left: 32px;
        padding-right: 32px;
        -webkit-transition: all 0.2s ease-in-out;
        transition: all 0.2s ease-in-out;
      }

      .emotion-6 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
      }

      <div
        className="emotion-7"
      >
        <label
          className="emotion-0"
        >
          Choose a filter:
        </label>
        <button
          className="emotion-2"
          onClick={[Function]}
        >
          Filter:
          <svg
            className="emotion-1"
            viewBox="0 0 16 16"
          >
            <title />
            <desc />
            <path
              d="M11.912 5.754a.62.62 0 00-.25-.186.883.883 0 00-.344-.068H4.682c-.12 0-.24.024-.344.068a.62.62 0 00-.25.186.398.398 0 00-.088.252.405.405 0 00.098.25l3.318 4.004c.061.073.147.134.249.176A.886.886 0 008 10.5a.886.886 0 00.335-.064.633.633 0 00.249-.176l3.318-4.004a.405.405 0 00.098-.25.398.398 0 00-.088-.252z"
              fill="currentColor"
            />
          </svg>
        </button>
        <ul
          className="emotion-5"
        >
          <li
            className="emotion-3"
          >
            Item 1
          </li>
          <li
            className="emotion-3"
          >
            Item 2
          </li>
        </ul>
        <div
          className="emotion-6"
          tabIndex={0}
        />
      </div>
    `)
  })
})
