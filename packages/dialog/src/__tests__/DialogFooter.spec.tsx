import * as React from 'react'
import serializer from 'jest-emotion'
import renderer from 'react-test-renderer'
import { DialogFooter } from '../DialogFooter'

expect.addSnapshotSerializer(serializer)

describe('DialogFooter', () => {
  it('should render the DialogContent component with the appropriate default styles', () => {
    expect(
      renderer
        .create(
          <DialogFooter>
            <p>Content for the dialog</p>
          </DialogFooter>,
        )
        .toJSON(),
    ).toMatchInlineSnapshot(`
      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        background: white;
        border-top: 1px solid;
        border-color: muted;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
        margin-top: auto;
        padding: 32px;
      }

      <footer
        className="emotion-0"
      >
        <p>
          Content for the dialog
        </p>
      </footer>
    `)
  })
})
