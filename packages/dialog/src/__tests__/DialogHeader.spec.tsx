import * as React from 'react'
import serializer from 'jest-emotion'
import renderer from 'react-test-renderer'
import { DialogHeader } from '../DialogHeader'

expect.addSnapshotSerializer(serializer)

describe('DialogHeader', () => {
  it('should render the DialogHeader component with the appropriate default styles', () => {
    expect(
      renderer
        .create(
          <DialogHeader>
            <p>Content for the dialog header</p>
          </DialogHeader>,
        )
        .toJSON(),
    ).toMatchInlineSnapshot(`
      .emotion-3 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        -webkit-align-items: flex-start;
        -webkit-box-align: flex-start;
        -ms-flex-align: flex-start;
        align-items: flex-start;
        background: white;
        border-bottom: 1px solid;
        border-color: muted;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        padding: 32px;
      }

      .emotion-2 {
        background: none;
        border: none;
        padding: 0;
      }

      .emotion-0 {
        border: 0;
        -webkit-clip: rect(0 0 0 0);
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
        white-space: nowrap;
        word-wrap: normal;
      }

      .emotion-1 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        fill: currentColor;
        color: black;
        display: block;
        color: muted;
        height: 14px;
        width: 14px;
        display: block;
      }

      <header
        className="emotion-3"
      >
        <p>
          Content for the dialog header
        </p>
        <button
          className="emotion-2"
        >
          <span
            className="emotion-0"
          >
            Close
          </span>
          <svg
            aria-hidden={true}
            className="emotion-1"
            viewBox="0 0 14 14"
          >
            <title />
            <desc />
            <path
              d="M8.006 7.079a.11.11 0 0 1 0-.155l4.052-4.052a.656.656 0 1 0-.93-.928l-4.05 4.05a.11.11 0 0 1-.156 0L2.87 1.944a.656.656 0 1 0-.928.928l4.051 4.052a.11.11 0 0 1 0 .155l-4.05 4.052a.657.657 0 0 0 .927.928l4.052-4.053a.11.11 0 0 1 .155 0l4.052 4.053a.656.656 0 1 0 .928-.928L8.006 7.079z"
            />
          </svg>
        </button>
      </header>
    `)
  })
})
