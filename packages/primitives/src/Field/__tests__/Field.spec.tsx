import * as React from 'react'
import serializer from 'jest-emotion'
import renderer from 'react-test-renderer'
import { Field, FieldError } from '../Field'

expect.addSnapshotSerializer(serializer)

describe('Field', () => {
  it('should render the label and input element in the Field', () => {
    expect(
      renderer.create(<Field label="First name" name="firstName" />).toJSON(),
    ).toMatchInlineSnapshot(`
      .emotion-2 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        margin-bottom: 32px;
      }

      .emotion-0 {
        box-sizing: border-box;
        display: inline-block;
        margin: 0;
        min-width: 0;
        margin-bottom: 8px;
      }

      .emotion-1 {
        margin: 0;
        min-width: 0;
        display: block;
        width: 100%;
        padding: 8px;
        -webkit-appearance: none;
        -moz-appearance: none;
        -ms-appearance: none;
        appearance: none;
        font-size: inherit;
        line-height: inherit;
        border: 1px solid;
        border-radius: default;
        color: inherit;
        background-color: transparent;
      }

      <div
        className="emotion-2"
      >
        <label
          className="emotion-0"
          htmlFor="firstName"
        >
          First name
        </label>
        <input
          className="emotion-1"
          id="firstName"
          name="firstName"
        />
      </div>
    `)
  })
})

describe('FieldErro', () => {
  it('should render the FieldError as a span', () => {
    expect(
      renderer
        .create(<FieldError id="error">Error message</FieldError>)
        .toJSON(),
    ).toMatchInlineSnapshot(`
      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        color: danger;
      }

      <span
        className="emotion-0"
        id="error"
        role="alert"
      >
        Error message
      </span>
    `)
  })
})
