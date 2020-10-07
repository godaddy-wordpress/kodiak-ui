import * as React from 'react'
import serializer from 'jest-emotion'
import renderer from 'react-test-renderer'
import { StatProgress } from '../'

expect.addSnapshotSerializer(serializer)

describe('StatProgress', () => {
  it('should render the StatProgress', () => {
    expect(
      renderer
        .create(
          <StatProgress
            min={0}
            max={200}
            value={57}
            label="Sample"
            labelRight="Right label"
          />,
        )
        .toJSON(),
    ).toMatchInlineSnapshot(`
      .emotion-5 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
      }

      .emotion-2 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        margin-bottom: 8px;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
      }

      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        font-weight: semiBold;
      }

      .emotion-4 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        background-color: muted;
        border-radius: default;
        height: 12px;
      }

      .emotion-3 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        background-color: primary;
        height: 100%;
        -webkit-transition: all 0.2s ease-in-out 0s;
        transition: all 0.2s ease-in-out 0s;
        position: relative;
        width: 28.5%;
      }

      <div
        className="emotion-5"
      >
        <div
          className="emotion-2"
        >
          <div
            className="emotion-0"
          >
            Sample
          </div>
          <div
            className="emotion-0"
          >
            Right label
          </div>
        </div>
        <div
          className="emotion-4"
        >
          <div
            aria-valuemax={200}
            aria-valuemin={0}
            aria-valuenow={57}
            className="emotion-3"
            role="progressbar"
          />
        </div>
      </div>
    `)
  })
})
