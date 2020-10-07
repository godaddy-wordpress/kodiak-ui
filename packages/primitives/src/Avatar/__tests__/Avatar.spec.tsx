import * as React from 'react'
import serializer from 'jest-emotion'
import renderer from 'react-test-renderer'
import { Avatar } from '../Avatar'

expect.addSnapshotSerializer(serializer)

describe('Avatar', () => {
  it('should render the Avatar with an Image', () => {
    expect(renderer.create(<Avatar src="./logo.svg" alt="logo" />).toJSON())
      .toMatchInlineSnapshot(`
      .emotion-1 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
      }

      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        width: 100%;
        height: 100%;
        text-align: center;
        object-fit: cover;
        color: transparent;
        text-indent: 10000px;
      }

      <div
        className="emotion-1"
      >
        <img
          alt="logo"
          className="emotion-0"
          src="./logo.svg"
        />
      </div>
    `)
  })

  it('should render the Avatar text', () => {
    expect(renderer.create(<Avatar>S</Avatar>).toJSON()).toMatchInlineSnapshot(`
      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
      }

      <div
        className="emotion-0"
      >
        S
      </div>
    `)
  })
})
