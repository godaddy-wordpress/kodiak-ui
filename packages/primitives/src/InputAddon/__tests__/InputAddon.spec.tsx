import * as React from 'react'
import serializer from '@emotion/jest'
import renderer from 'react-test-renderer'
import { InputAddon } from '../InputAddon'

expect.addSnapshotSerializer(serializer)

describe('InputAddon', () => {
  it('should render the div to render input addons', () => {
    expect(
      renderer.create(<InputAddon>Rendering input addon</InputAddon>).toJSON(),
    ).toMatchInlineSnapshot(`
      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-top: none;
        border-bottom: none;
        border-left: none;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex: 0 0 auto;
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        white-space: nowrap;
        width: auto;
      }

      <div
        className="emotion-0"
      >
        Rendering input addon
      </div>
    `)
  })
})
