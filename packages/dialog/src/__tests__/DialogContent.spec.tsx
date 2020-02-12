import * as React from 'react'
import serializer from 'jest-emotion'
import renderer from 'react-test-renderer'
import { DialogContent } from '../DialogContent'

expect.addSnapshotSerializer(serializer)

describe('DialogContent', () => {
  it('should render the DialogContent component with the appropriate default styles', () => {
    expect(
      renderer
        .create(
          <DialogContent>
            <p>Content for the dialog</p>
          </DialogContent>,
        )
        .toJSON(),
    ).toMatchInlineSnapshot(`
      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        background: white;
        padding: 32px;
      }

      <div
        className="emotion-0"
      >
        <p>
          Content for the dialog
        </p>
      </div>
    `)
  })
})
