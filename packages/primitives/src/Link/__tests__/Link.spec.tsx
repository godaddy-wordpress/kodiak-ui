import * as React from 'react'
import serializer from 'jest-emotion'
import renderer from 'react-test-renderer'
import { Link } from '../Link'

expect.addSnapshotSerializer(serializer)

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
        color: red;
      }

      <a
        className="emotion-0"
        href="https://jilt.com"
      >
        jilt.com
      </a>
    `)
  })
})
