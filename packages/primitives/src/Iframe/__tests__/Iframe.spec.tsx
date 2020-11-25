import * as React from 'react'
import serializer from '@emotion/jest'
import renderer from 'react-test-renderer'
import { Iframe } from '../Iframe'

describe('Iframe', () => {
  it('should render the Iframe component as an iframe element', () => {
    expect(renderer.create(<Iframe />).toJSON()).toMatchInlineSnapshot(`
      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        box-sizing: border-box;
        display: block;
        margin: 0;
        min-width: 0;
      }

      <iframe
        className="emotion-0"
      />
    `)
  })
})
