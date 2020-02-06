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
      .emotion-4 {
        box-sizing: border-box;
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

      .emotion-3 {
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
        opacity: 0;
        width: 100%;
        height: 1px;
        overflow: hidden;
        position: absolute;
        z-index: -1;
      }

      .emotion-1 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        fill: currentColor;
        color: black;
        display: block;
        height: 24px;
        width: 24px;
        display: none;
      }

      input:focus ~ .emotion-1 {
        background-color: highlight;
      }

      input:checked ~ .emotion-1 {
        display: block;
        color: primary;
      }

      .emotion-2 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        fill: currentColor;
        color: black;
        display: block;
        height: 24px;
        width: 24px;
        color: defaultGray;
        display: block;
      }

      input:focus ~ .emotion-2 {
        background-color: highlight;
      }

      input:checked ~ .emotion-2 {
        display: none;
      }

      <label
        className="emotion-4"
      >
        <div
          className="emotion-3"
        >
          <input
            className="emotion-0"
            defaultChecked={true}
            name="dark-mode"
            type="checkbox"
          />
          <svg
            className="emotion-1"
            viewBox="0 0 24 24"
          >
            <title>
              Checkbox input checked
            </title>
            <desc />
            <path
              d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
            />
          </svg>
          <svg
            className="emotion-2"
            viewBox="0 0 24 24"
          >
            <title>
              Checkbox input unchecked
            </title>
            <desc />
            <path
              d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
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
      .emotion-4 {
        box-sizing: border-box;
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

      .emotion-3 {
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
        opacity: 0;
        width: 100%;
        height: 1px;
        overflow: hidden;
        position: absolute;
        z-index: -1;
      }

      .emotion-1 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        fill: currentColor;
        color: black;
        display: block;
        height: 24px;
        width: 24px;
        display: none;
      }

      input:focus ~ .emotion-1 {
        background-color: highlight;
      }

      input:checked ~ .emotion-1 {
        display: block;
        color: primary;
      }

      .emotion-2 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        fill: currentColor;
        color: black;
        display: block;
        height: 24px;
        width: 24px;
        color: defaultGray;
        display: block;
      }

      input:focus ~ .emotion-2 {
        background-color: highlight;
      }

      input:checked ~ .emotion-2 {
        display: none;
      }

      <label
        className="emotion-4"
      >
        <div
          className="emotion-3"
        >
          <input
            className="emotion-0"
            name="dark-mode"
            type="checkbox"
          />
          <svg
            className="emotion-1"
            viewBox="0 0 24 24"
          >
            <title>
              Checkbox input checked
            </title>
            <desc />
            <path
              d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
            />
          </svg>
          <svg
            className="emotion-2"
            viewBox="0 0 24 24"
          >
            <title>
              Checkbox input unchecked
            </title>
            <desc />
            <path
              d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
            />
          </svg>
        </div>
        Light Mode
      </label>
    `)
  })
})
