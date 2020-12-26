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
      .emotion-0 {
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
        justify-content: space-between;
        padding: 32px;
      }

      <header
        className="emotion-0"
      >
        <p>
          Content for the dialog header
        </p>
      </header>
    `)
  })
})
