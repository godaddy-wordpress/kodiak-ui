import * as React from 'react'
import serializer from '@emotion/jest'
import renderer from 'react-test-renderer'
import { Link } from '../Link'

describe('Link', () => {
  it('should render the Link as an a element', () => {
    expect(renderer.create(<Link href="#">Rendering a element</Link>).toJSON())
      .toMatchInlineSnapshot(`
      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
      }

      <a
        className="emotion-0"
        href="#"
        onClick={[Function]}
      >
        Rendering a element
      </a>
    `)
  })

  it('should style the element with the `sx` prop', () => {
    expect(
      renderer.create(<Link sx={{ color: 'white' }}>A link</Link>).toJSON(),
    ).toMatchInlineSnapshot(`
      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        color: white;
      }

      <a
        className="emotion-0"
        onClick={[Function]}
      >
        A link
      </a>
    `)
  })

  it('should style the element with styled-system props', () => {
    expect(
      renderer
        .create(
          <Link href="https://jilt.com" color="red">
            jilt.com
          </Link>,
        )
        .toJSON(),
    ).toMatchInlineSnapshot(`
      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
      }

      <a
        className="emotion-0"
        color="red"
        href="https://jilt.com"
        onClick={[Function]}
      >
        jilt.com
      </a>
    `)
  })
})
