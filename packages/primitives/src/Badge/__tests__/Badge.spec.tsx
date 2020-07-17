import * as React from 'react'
import serializer from 'jest-emotion'
import renderer from 'react-test-renderer'
import { Badge } from '../Badge'

describe('Badge', () => {
  it('should render the Badge with a label', () => {
    expect(renderer.create(<Badge count={23}>new</Badge>).toJSON())
      .toMatchInlineSnapshot(`
      <div
        className="css-13hvbvu"
      >
        <span
          className="css-1lwegjd"
        >
          <span
            className="css-vurnku"
          >
            23
             
            new
          </span>
        </span>
      </div>
    `)
  })

  it('should render the badge in the top-right corner of an element', () => {
    expect(
      renderer
        .create(
          <Badge count={106} position="top-right">
            <svg
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
              height="24"
              width="24"
            >
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
            </svg>
          </Badge>,
        )
        .toJSON(),
    ).toMatchInlineSnapshot(`
      <div
        className="css-13hvbvu"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path
            d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
          />
        </svg>
        <span
          className="css-rtejmv"
        >
          99+
        </span>
      </div>
    `)
  })
})
