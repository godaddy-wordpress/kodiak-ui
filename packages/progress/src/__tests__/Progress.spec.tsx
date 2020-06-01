import * as React from 'react'
import serializer from 'jest-emotion'
import renderer from 'react-test-renderer'
import { Progress, ProgressThumb } from '../'

expect.addSnapshotSerializer(serializer)

describe('Progress', () => {
  it('should render the Progress bar', () => {
    expect(
      renderer
        .create(
          <Progress value={882} min={0} max={1000}>
            <ProgressThumb value={882} />
          </Progress>,
        )
        .toJSON(),
    ).toMatchInlineSnapshot(`
      .emotion-2 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        background-color: muted;
        border-radius: default;
        height: 12px;
      }

      .emotion-1 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        background-color: primary;
        height: 100%;
        -webkit-transition: all 0.2s ease-in-out 0s;
        transition: all 0.2s ease-in-out 0s;
        position: relative;
        width: 88.2%;
      }

      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        background-color: white;
        border: 1px solid;
        border-color: muted;
        border-radius: default;
        left: calc(100% - 0px);
        line-height: 1;
        padding: 8px;
        position: absolute;
        right: auto;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
      }

      <div
        className="emotion-2"
      >
        <div
          aria-valuemax={1000}
          aria-valuemin={0}
          aria-valuenow={882}
          className="emotion-1"
          role="progressbar"
        >
          <div
            className="emotion-0"
          >
            882
          </div>
        </div>
      </div>
    `)
  })
})
