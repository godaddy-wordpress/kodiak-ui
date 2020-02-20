import * as React from 'react'
import serializer from 'jest-emotion'
import renderer from 'react-test-renderer'
import { render, fireEvent } from '@testing-library/react'
import { Text, SvgIcon } from '@kodiak-ui/primitives'
import { Message } from '../Message'

expect.addSnapshotSerializer(serializer)

function MessageExample() {
  function handleDismiss() {
    alert('Dismissing')
  }

  return (
    <Message onDismiss={handleDismiss}>
      <SvgIcon
        viewBox="0 0 16 16"
        width="24px"
        height="24px"
        mr={4}
        color="blue.3"
        flexShrink={0}
      >
        <path d="M11.655 6.061a.15.15 0 00-.146.112l-2.058 7.42a.155.155 0 00.081.178.15.15 0 00.19-.049l5.248-7.415a.155.155 0 00-.121-.245l-3.194-.001zM10.54 6.256a.155.155 0 00-.079-.179.15.15 0 00-.067-.016h-4.79a.15.15 0 00-.12.06.154.154 0 00-.026.135l2.394 8.631A.154.154 0 008 15a.151.151 0 00.146-.113l2.395-8.631zM9.784 5.141a.15.15 0 00.128-.071.154.154 0 00.009-.148l-1.817-3.85A.118.118 0 008 1.002a.115.115 0 00-.105.068L6.077 4.922a.155.155 0 00.064.2.15.15 0 00.073.02h3.57zM6.276 13.72a.152.152 0 00.27-.13L4.488 6.173a.153.153 0 00-.145-.112H1.15a.151.151 0 00-.135.085.155.155 0 00.014.16l5.246 7.414zM11.85 4.947a.154.154 0 00.078.179.15.15 0 00.068.015h2.84a.15.15 0 00.136-.085.154.154 0 00-.014-.16l-2.061-2.808a.152.152 0 00-.15-.06.152.152 0 00-.118.11l-.78 2.809zM4.003 5.141a.15.15 0 00.12-.06.153.153 0 00.025-.134l-.779-2.81a.154.154 0 00-.118-.109.15.15 0 00-.15.06l-2.062 2.81a.154.154 0 00.121.245l2.843-.002zM4.97 4.501a.154.154 0 00.134.11.151.151 0 00.15-.085l1.558-3.304a.155.155 0 00-.063-.2.15.15 0 00-.073-.02H4.199a.154.154 0 00-.122.062.155.155 0 00-.022.131l.916 3.306zM10.743 4.526a.152.152 0 00.15.087.151.151 0 00.134-.112l.916-3.306a.155.155 0 00-.077-.178A.15.15 0 0011.8 1H9.322a.15.15 0 00-.128.072.154.154 0 00-.009.148l1.558 3.306z" />
      </SvgIcon>
      <Text>
        This is a static, default alert with two lines of text. Copy should
        never extend past two lines for readability.
      </Text>
    </Message>
  )
}

describe('Message', () => {
  beforeEach(() => {
    window.alert = jest.fn()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should call the onDismiss method when the dismiss button is clicked', () => {
    const { getByTestId } = render(<MessageExample />)
    const trigger = getByTestId('messageDismiss')

    expect(trigger).toBeDefined()

    fireEvent.click(trigger)

    expect(window.alert).toBeCalledTimes(1)
  })

  it('should render the Message component with the appropriate default styles', () => {
    expect(renderer.create(<MessageExample />).toJSON()).toMatchInlineSnapshot(`
      .emotion-6 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        background-color: highlight;
        border-left-style: solid;
        border-left-width: 8px;
        border-left-color: primary;
        border-radius: default;
        display: -webkit-inline-box;
        display: -webkit-inline-flex;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        max-width: 636px;
        min-width: 370px;
        min-height: 64px;
        padding: 32px;
      }

      .emotion-2 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        margin-right: 32px;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-flex: 1;
        -webkit-flex-grow: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
      }

      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        fill: currentColor;
        color: black;
        display: block;
        margin-right: 32px;
        color: blue.3;
        width: 24px;
        height: 24px;
        -webkit-flex-shrink: 0;
        -ms-flex-negative: 0;
        flex-shrink: 0;
      }

      .emotion-1 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
      }

      .emotion-5 {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        cursor: pointer;
        display: inline-block;
        font-size: inherit;
        line-height: inherit;
        text-align: center;
        -webkit-text-decoration: none;
        text-decoration: none;
        -webkit-transition: all 0.2s ease-in-out;
        transition: all 0.2s ease-in-out;
        padding-left: 16px;
        padding-right: 16px;
        padding-top: 8px;
        padding-bottom: 8px;
        color: white;
        background-color: primary;
        border: 0;
        border-radius: default;
      }

      .emotion-5:hover {
        background-color: secondary;
      }

      .emotion-3 {
        border: 0;
        -webkit-clip: rect(0 0 0 0);
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
        white-space: nowrap;
        word-wrap: normal;
      }

      .emotion-4 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        fill: currentColor;
        color: black;
        display: block;
        color: white;
        height: 16px;
        width: 16px;
      }

      <div
        aria-live="polite"
        className="emotion-6"
        role="status"
      >
        <div
          className="emotion-2"
        >
          <svg
            className="emotion-0"
            viewBox="0 0 16 16"
          >
            <title />
            <desc />
            <path
              d="M11.655 6.061a.15.15 0 00-.146.112l-2.058 7.42a.155.155 0 00.081.178.15.15 0 00.19-.049l5.248-7.415a.155.155 0 00-.121-.245l-3.194-.001zM10.54 6.256a.155.155 0 00-.079-.179.15.15 0 00-.067-.016h-4.79a.15.15 0 00-.12.06.154.154 0 00-.026.135l2.394 8.631A.154.154 0 008 15a.151.151 0 00.146-.113l2.395-8.631zM9.784 5.141a.15.15 0 00.128-.071.154.154 0 00.009-.148l-1.817-3.85A.118.118 0 008 1.002a.115.115 0 00-.105.068L6.077 4.922a.155.155 0 00.064.2.15.15 0 00.073.02h3.57zM6.276 13.72a.152.152 0 00.27-.13L4.488 6.173a.153.153 0 00-.145-.112H1.15a.151.151 0 00-.135.085.155.155 0 00.014.16l5.246 7.414zM11.85 4.947a.154.154 0 00.078.179.15.15 0 00.068.015h2.84a.15.15 0 00.136-.085.154.154 0 00-.014-.16l-2.061-2.808a.152.152 0 00-.15-.06.152.152 0 00-.118.11l-.78 2.809zM4.003 5.141a.15.15 0 00.12-.06.153.153 0 00.025-.134l-.779-2.81a.154.154 0 00-.118-.109.15.15 0 00-.15.06l-2.062 2.81a.154.154 0 00.121.245l2.843-.002zM4.97 4.501a.154.154 0 00.134.11.151.151 0 00.15-.085l1.558-3.304a.155.155 0 00-.063-.2.15.15 0 00-.073-.02H4.199a.154.154 0 00-.122.062.155.155 0 00-.022.131l.916 3.306zM10.743 4.526a.152.152 0 00.15.087.151.151 0 00.134-.112l.916-3.306a.155.155 0 00-.077-.178A.15.15 0 0011.8 1H9.322a.15.15 0 00-.128.072.154.154 0 00-.009.148l1.558 3.306z"
            />
          </svg>
          <p
            className="emotion-1"
          >
            This is a static, default alert with two lines of text. Copy should never extend past two lines for readability.
          </p>
        </div>
        <button
          className="emotion-5"
          data-testid="messageDismiss"
          onClick={[Function]}
        >
          <span
            className="emotion-3"
          >
            Dismiss message
          </span>
          <svg
            className="emotion-4"
            viewBox="0 0 16 16"
          >
            <title />
            <desc />
            <path
              d="M9.15 8.088a.125.125 0 010-.177l4.63-4.63a.75.75 0 00-1.061-1.06l-4.63 4.628a.125.125 0 01-.178 0L3.281 2.22A.75.75 0 002.22 3.28l4.63 4.631a.125.125 0 010 .177L2.22 12.72a.75.75 0 101.06 1.06l4.631-4.63a.125.125 0 01.177 0l4.63 4.63a.75.75 0 101.062-1.06L9.15 8.09z"
            />
          </svg>
        </button>
      </div>
    `)
  })
})
