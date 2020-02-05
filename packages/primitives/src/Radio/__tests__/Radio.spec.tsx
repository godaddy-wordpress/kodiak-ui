import * as React from 'react'
import serializer from 'jest-emotion'
import renderer from 'react-test-renderer'
import { Label } from '../../Label'
import { Radio } from '../'

expect.addSnapshotSerializer(serializer)

describe('Radio', () => {
  it('should render the checked radio input', () => {
    expect(
      renderer
        .create(
          <Label display="flex" alignItems="center">
            <Radio name="dark-mode" value="true" defaultChecked={true} />
            Dark Mode
          </Label>,
        )
        .toJSON(),
    ).toMatchInlineSnapshot(`
      .emotion-3 {
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

      .emotion-2 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
      }

      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        fill: currentColor;
        color: black;
        display: block;
        height: 16px;
        width: 16px;
        margin-right: 8px;
        display: none;
      }

      input:focus ~ .emotion-0 {
        background-color: highlight;
      }

      input:checked ~ .emotion-0 {
        display: block;
        color: primary;
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
        margin-right: 8px;
        color: defaultGray;
        display: block;
      }

      input:focus ~ .emotion-1 {
        background-color: highlight;
      }

      input:checked ~ .emotion-1 {
        display: none;
      }

      <label
        className="emotion-3"
      >
        <div
          className="emotion-2"
        >
          <input
            defaultChecked={true}
            name="dark-mode"
            style={
              Object {
                "height": 1,
                "opacity": 0,
                "overflow": "hidden",
                "position": "absolute",
                "width": 1,
                "zIndex": -1,
              }
            }
            type="radio"
            value="true"
          />
          <svg
            className="emotion-0"
            viewBox="0 0 16 16"
          >
            <title>
              Radio input checked
            </title>
            <desc />
            <path
              d="M8 0C3.584 0 0 3.584 0 8C0 12.416 3.584 16 8 16C12.416 16 16 12.416 16 8C16 3.584 12.416 0 8 0ZM8 11C6.5 11 5 9.75484 5 8C5 6.24516 6.5 5 8 5C9.5 5 11 6.19903 11 8C11 9.80097 9.5 11 8 11Z"
            />
          </svg>
          <svg
            className="emotion-1"
            viewBox="0 0 16 16"
          >
            <title>
              Radio input unchecked
            </title>
            <desc />
            <path
              d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8 8-3.584 8-8-3.584-8-8-8zm0 14.4A6.398 6.398 0 011.6 8c0-3.536 2.864-6.4 6.4-6.4 3.536 0 6.4 2.864 6.4 6.4 0 3.536-2.864 6.4-6.4 6.4z"
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
            <Radio name="dark-mode" value="false" />
            Light Mode
          </Label>,
        )
        .toJSON(),
    ).toMatchInlineSnapshot(`
      .emotion-3 {
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

      .emotion-2 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
      }

      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        fill: currentColor;
        color: black;
        display: block;
        height: 16px;
        width: 16px;
        margin-right: 8px;
        display: none;
      }

      input:focus ~ .emotion-0 {
        background-color: highlight;
      }

      input:checked ~ .emotion-0 {
        display: block;
        color: primary;
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
        margin-right: 8px;
        color: defaultGray;
        display: block;
      }

      input:focus ~ .emotion-1 {
        background-color: highlight;
      }

      input:checked ~ .emotion-1 {
        display: none;
      }

      <label
        className="emotion-3"
      >
        <div
          className="emotion-2"
        >
          <input
            name="dark-mode"
            style={
              Object {
                "height": 1,
                "opacity": 0,
                "overflow": "hidden",
                "position": "absolute",
                "width": 1,
                "zIndex": -1,
              }
            }
            type="radio"
            value="false"
          />
          <svg
            className="emotion-0"
            viewBox="0 0 16 16"
          >
            <title>
              Radio input checked
            </title>
            <desc />
            <path
              d="M8 0C3.584 0 0 3.584 0 8C0 12.416 3.584 16 8 16C12.416 16 16 12.416 16 8C16 3.584 12.416 0 8 0ZM8 11C6.5 11 5 9.75484 5 8C5 6.24516 6.5 5 8 5C9.5 5 11 6.19903 11 8C11 9.80097 9.5 11 8 11Z"
            />
          </svg>
          <svg
            className="emotion-1"
            viewBox="0 0 16 16"
          >
            <title>
              Radio input unchecked
            </title>
            <desc />
            <path
              d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8 8-3.584 8-8-3.584-8-8-8zm0 14.4A6.398 6.398 0 011.6 8c0-3.536 2.864-6.4 6.4-6.4 3.536 0 6.4 2.864 6.4 6.4 0 3.536-2.864 6.4-6.4 6.4z"
            />
          </svg>
        </div>
        Light Mode
      </label>
    `)
  })
})
