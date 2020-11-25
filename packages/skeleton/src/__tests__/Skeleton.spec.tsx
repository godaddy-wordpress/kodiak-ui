import * as React from 'react'
import serializer from '@emotion/jest'
import renderer from 'react-test-renderer'
import { Skeleton, Repeat } from '../Skeleton'

expect.addSnapshotSerializer(serializer)

describe('Accordion', () => {
  it('should render the Skeleton', () => {
    expect(renderer.create(<Skeleton />).toJSON()).toMatchInlineSnapshot(`
      @keyframes animation-0 {
        0% {
          background-position: -200px 0;
        }

        100% {
          background-position: calc(200px + 100%) 0;
        }
      }

      .emotion-1 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
      }

      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        background-color: #eee;
        background-image: linear-gradient( 90deg, #eee, #f5f5f5, #eee );
        background-size: 200px 100%;
        background-repeat: no-repeat;
        border-radius: default;
        display: inline-block;
        line-height: 1;
        width: 100%;
        -webkit-animation: animation-0 1.2s ease-in-out infinite;
        animation: animation-0 1.2s ease-in-out infinite;
      }

      <span
        className="emotion-1"
      >
        <span
          className="emotion-0"
        >
          ‌
        </span>
      </span>
    `)
  })

  it('should render multiple skeletons', () => {
    expect(
      renderer
        .create(
          <Repeat count={2}>
            <Skeleton />
          </Repeat>,
        )
        .toJSON(),
    ).toMatchInlineSnapshot(`
      Array [
        @keyframes animation-0 {
        0% {
          background-position: -200px 0;
        }

        100% {
          background-position: calc(200px + 100%) 0;
        }
      }

      .emotion-1 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
      }

      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        background-color: #eee;
        background-image: linear-gradient( 90deg, #eee, #f5f5f5, #eee );
        background-size: 200px 100%;
        background-repeat: no-repeat;
        border-radius: default;
        display: inline-block;
        line-height: 1;
        width: 100%;
        -webkit-animation: animation-0 1.2s ease-in-out infinite;
        animation: animation-0 1.2s ease-in-out infinite;
      }

      <span
          className="emotion-1"
        >
          <span
            className="emotion-0"
          >
            ‌
          </span>
        </span>,
        @keyframes animation-0 {
        0% {
          background-position: -200px 0;
        }

        100% {
          background-position: calc(200px + 100%) 0;
        }
      }

      .emotion-1 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
      }

      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        background-color: #eee;
        background-image: linear-gradient( 90deg, #eee, #f5f5f5, #eee );
        background-size: 200px 100%;
        background-repeat: no-repeat;
        border-radius: default;
        display: inline-block;
        line-height: 1;
        width: 100%;
        -webkit-animation: animation-0 1.2s ease-in-out infinite;
        animation: animation-0 1.2s ease-in-out infinite;
      }

      <span
          className="emotion-1"
        >
          <span
            className="emotion-0"
          >
            ‌
          </span>
        </span>,
      ]
    `)
  })
})
