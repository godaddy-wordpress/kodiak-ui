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
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        border-radius: full;
        display: -webkit-inline-box;
        display: -webkit-inline-flex;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -webkit-flex-shrink: 0;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        line-height: 1;
        overflow: hidden;
        position: relative;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        width: 32px;
        height: 32px;
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
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        border-radius: full;
        display: -webkit-inline-box;
        display: -webkit-inline-flex;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -webkit-flex-shrink: 0;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        line-height: 1;
        overflow: hidden;
        position: relative;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        width: 32px;
        height: 32px;
      }

      <div
        className="emotion-0"
      >
        S
      </div>
    `)
  })
})
