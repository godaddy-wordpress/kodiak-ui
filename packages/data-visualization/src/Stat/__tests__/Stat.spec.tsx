import * as React from 'react'
import serializer from '@emotion/jest'
import renderer from 'react-test-renderer'
import { Stat } from '../..'

expect.addSnapshotSerializer(serializer)

describe('Stat', () => {
  it('should render the Stat bar', () => {
    expect(
      renderer
        .create(<Stat icon={<div>an icon</div>}>$ 1,234.456</Stat>)
        .toJSON(),
    ).toMatchInlineSnapshot(`
      .emotion-4 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        display: grid;
        border-radius: default;
        border: 1px solid;
        border-color: gray.2;
        -webkit-align-items: start;
        -webkit-box-align: start;
        -ms-flex-align: start;
        align-items: start;
        grid-template-columns: max-content auto;
        line-height: 16px;
        gap: 32px;
        padding: 32px;
      }

      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
      }

      .emotion-3 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
      }

      .emotion-1 {
        box-sizing: border-box;
        display: inline-block;
        margin: 0;
        min-width: 0;
      }

      .emotion-2 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        font-weight: bold;
        margin-top: 8px;
        font-size: 24px;
      }

      <div
        className="emotion-4"
      >
        <div
          className="emotion-0"
        >
          <div>
            an icon
          </div>
        </div>
        <div
          className="emotion-3"
        >
          <label
            className="emotion-1"
          />
          <div
            className="emotion-2"
          >
            $ 1,234.456
          </div>
        </div>
      </div>
    `)
  })
})
