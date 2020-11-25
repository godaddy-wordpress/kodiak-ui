import * as React from 'react'
import serializer from '@emotion/jest'
import renderer from 'react-test-renderer'
import { DotLoadingIndicator } from '../DotLoadingIndicator'

describe('DotLoadingIndicator', () => {
  it('should render the DotLoadingIndicator as a div element', () => {
    expect(renderer.create(<DotLoadingIndicator />).toJSON())
      .toMatchInlineSnapshot(`
      @keyframes animation-0 {
        0%, 80%, 100% {
          opacity: 0;
        }

        40% {
          opacity: 1;
        }
      }

      @keyframes animation-0 {
        0%, 80%, 100% {
          opacity: 0;
        }

        40% {
          opacity: 1;
        }
      }

      @keyframes animation-0 {
        0%, 80%, 100% {
          opacity: 0;
        }

        40% {
          opacity: 1;
        }
      }

      .emotion-3 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-transition: color 150ms;
        transition: color 150ms;
        line-height: 1;
        margin-left: 4px;
        -webkit-align-self: center;
        -ms-flex-item-align: center;
        align-self: center;
        text-align: center;
      }

      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        -webkit-animation: animation-0 1s ease-in-out 0ms infinite;
        animation: animation-0 1s ease-in-out 0ms infinite;
        background-color: currentColor;
        border-radius: 4px;
        display: inline-block;
        margin-left: 2px;
        height: 4px;
        width: 4px;
      }

      .emotion-1 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        -webkit-animation: animation-0 1s ease-in-out 160ms infinite;
        animation: animation-0 1s ease-in-out 160ms infinite;
        background-color: currentColor;
        border-radius: 4px;
        display: inline-block;
        margin-left: 2px;
        height: 4px;
        width: 4px;
      }

      .emotion-2 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        -webkit-animation: animation-0 1s ease-in-out 320ms infinite;
        animation: animation-0 1s ease-in-out 320ms infinite;
        background-color: currentColor;
        border-radius: 4px;
        display: inline-block;
        margin-left: 2px;
        height: 4px;
        width: 4px;
      }

      <div
        className="emotion-3"
      >
        <span
          className="emotion-0"
        />
        <span
          className="emotion-1"
        />
        <span
          className="emotion-2"
        />
      </div>
    `)
  })

  it('should allow customizing size, delay, and sx', () => {
    expect(
      renderer
        .create(
          <DotLoadingIndicator sx={{ color: 'red' }} delay={320} size={10} />,
        )
        .toJSON(),
    ).toMatchInlineSnapshot(`
      @keyframes animation-0 {
        0%, 80%, 100% {
          opacity: 0;
        }

        40% {
          opacity: 1;
        }
      }

      @keyframes animation-0 {
        0%, 80%, 100% {
          opacity: 0;
        }

        40% {
          opacity: 1;
        }
      }

      @keyframes animation-0 {
        0%, 80%, 100% {
          opacity: 0;
        }

        40% {
          opacity: 1;
        }
      }

      @keyframes animation-0 {
        0%, 80%, 100% {
          opacity: 0;
        }

        40% {
          opacity: 1;
        }
      }

      @keyframes animation-0 {
        0%, 80%, 100% {
          opacity: 0;
        }

        40% {
          opacity: 1;
        }
      }

      @keyframes animation-0 {
        0%, 80%, 100% {
          opacity: 0;
        }

        40% {
          opacity: 1;
        }
      }

      .emotion-3 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-transition: color 150ms;
        transition: color 150ms;
        line-height: 1;
        margin-left: 4px;
        -webkit-align-self: center;
        -ms-flex-item-align: center;
        align-self: center;
        text-align: center;
        color: red;
      }

      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        -webkit-animation: animation-0 1s ease-in-out 0ms infinite;
        animation: animation-0 1s ease-in-out 0ms infinite;
        background-color: currentColor;
        border-radius: 10px;
        display: inline-block;
        margin-left: 5px;
        height: 10px;
        width: 10px;
      }

      .emotion-1 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        -webkit-animation: animation-0 1s ease-in-out 320ms infinite;
        animation: animation-0 1s ease-in-out 320ms infinite;
        background-color: currentColor;
        border-radius: 10px;
        display: inline-block;
        margin-left: 5px;
        height: 10px;
        width: 10px;
      }

      .emotion-2 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        -webkit-animation: animation-0 1s ease-in-out 640ms infinite;
        animation: animation-0 1s ease-in-out 640ms infinite;
        background-color: currentColor;
        border-radius: 10px;
        display: inline-block;
        margin-left: 5px;
        height: 10px;
        width: 10px;
      }

      <div
        className="emotion-3"
      >
        <span
          className="emotion-0"
        />
        <span
          className="emotion-1"
        />
        <span
          className="emotion-2"
        />
      </div>
    `)
  })
})
