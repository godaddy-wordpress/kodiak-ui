import * as React from 'react'
import serializer from 'jest-emotion'
import renderer from 'react-test-renderer'
import { Avatar } from '../Avatar'

expect.addSnapshotSerializer(serializer)

describe('Avatar', () => {
  it('should render the Avatar as an img element when imageSrc is given', () => {
    expect(
      renderer
        .create(
          <Avatar
            imageSrc="image.jpg"
            text="T"
            sx={{ width: '28px', height: '28px' }}
          />,
        )
        .toJSON(),
    ).toMatchInlineSnapshot(`
      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        max-width: 100%;
        height: auto;
        border-radius: full;
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

  it('should render the Avatar as a div element when imageSrc is not given', () => {
    expect(
      renderer
        .create(<Avatar text="T" sx={{ width: '28px', height: '28px' }} />)
        .toJSON(),
    ).toMatchInlineSnapshot(`
      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        border-radius: full;
        display: -webkit-inline-box;
        display: -webkit-inline-flex;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        width: 28px;
        height: 28px;
      }

      <div
        className="emotion-0"
      >
        T
      </div>
    `)
  })
})
