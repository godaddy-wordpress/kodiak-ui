import * as React from 'react'
import serializer from '@emotion/jest'
import renderer from 'react-test-renderer'
import { Image } from '../Image'

describe('Image', () => {
  it('should render the Image as an img element', () => {
    expect(
      renderer
        .create(
          <Image
            src="image.jpg"
            alt="T"
            sx={{ width: '28px', height: '28px' }}
          />,
        )
        .toJSON(),
    ).toMatchInlineSnapshot(`
      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        width: 28px;
        height: 28px;
      }

      <img
        alt="T"
        className="emotion-0"
        src="image.jpg"
      />
    `)
  })
})
