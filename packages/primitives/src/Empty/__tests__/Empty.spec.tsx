import * as React from 'react'
import serializer from 'jest-emotion'
import renderer from 'react-test-renderer'
import { Empty } from '../Empty'

expect.addSnapshotSerializer(serializer)

describe('Empty', () => {
  it('should render the Empty with an Image', () => {
    expect(
      renderer
        .create(<Empty title="No results">Please try again.</Empty>)
        .toJSON(),
    ).toMatchInlineSnapshot(`
      .emotion-1 {
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
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
      }

      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        display: block;
        font-size: 48px;
        margin-top: 128px;
      }

      <div
        className="emotion-1"
      >
        <span
          className="emotion-0"
        >
          No results
        </span>
        Please try again.
      </div>
    `)
  })
})
