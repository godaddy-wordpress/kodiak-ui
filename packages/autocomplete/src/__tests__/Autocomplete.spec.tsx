import * as React from 'react'
import serializer from 'jest-emotion'
import renderer from 'react-test-renderer'
import {
  render,
  fireEvent,
  within,
  getByTestId,
  getAllByTestId,
} from '@testing-library/react'
import { Autocomplete } from '../Autocomplete'

expect.addSnapshotSerializer(serializer)

const options = ['Option 1', 'Option 2', 'Option 3']

describe.skip('Autocomplete', () => {
  it('should allow a single selection from the options', () => {
    const { getByLabelText, getByText, queryByText } = render(
      <Autocomplete label="Single value autocomplete" options={options} />,
    )

    const input = getByLabelText(
      'Single value autocomplete',
    ) as HTMLInputElement
    expect(input.value).toBeNull

    fireEvent.click(input)
    const option1 = getByText('Option 1')

    expect(option1).toBeDefined
    expect(getByText('Option 2')).toBeDefined

    fireEvent.click(option1)

    expect(queryByText('Option 2')).toBeUndefined

    expect(input.value).toEqual('Option 1')

    fireEvent.click(input)
    expect(option1.getAttribute('data-option-selected')).toBeTruthy

    fireEvent.mouseOver(getByText('Option 2'))

    expect(option1.getAttribute('data-option-highlighted')).toBeFalsy
    expect(
      getByText('Option 2').getAttribute('data-option-highlighted'),
    ).toEqual('true')
  })

  it('should allow multiple selection from the options', () => {
    const { getByLabelText, getByText, queryByText, getByTestId } = render(
      <Autocomplete
        isMulti
        label="Multiple value autocomplete"
        options={options}
      />,
    )

    const input = getByLabelText(
      'Multiple value autocomplete',
    ) as HTMLInputElement
    expect(input.value).toBeNull

    fireEvent.click(input)
    const option1 = getByText('Option 1')
    const option2 = getByText('Option 2')

    expect(option1).toBeDefined
    fireEvent.click(option1)

    fireEvent.change(input, { target: { value: 'Option 2' } })

    expect(option2).toBeDefined

    expect(queryByText('Option 3')).toBeUndefined

    const option1Value = getByTestId('autocomplete-tag-value-0')

    expect(option1Value).toBeDefined
  })

  it('should render the Autcomplete with custom styles', () => {
    expect(
      renderer
        .create(
          <Autocomplete
            label="Autocomplete test"
            options={options}
            styles={{ root: { bg: 'purple' } }}
          />,
        )
        .toJSON(),
    ).toMatchInlineSnapshot(`
      .emotion-2 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
      }

      .emotion-0 {
        box-sizing: border-box;
        display: inline-block;
        margin: 0;
        min-width: 0;
      }

      .emotion-6 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        padding: 0;
        position: relative;
        width: 100%;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        padding-left: 2px;
        padding-right: 56px;
      }

      .emotion-1 {
        margin: 0;
        min-width: 0;
        display: block;
        width: 100%;
        padding: 8px;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        font-size: inherit;
        line-height: inherit;
        border: 1px solid;
        color: inherit;
        background-color: transparent;
        padding-left: 4px;
        padding-right: 4px;
        padding-top: 2px;
        padding-bottom: 2px;
        width: 0;
        min-width: 30px;
        -webkit-box-flex: 1;
        -webkit-flex-grow: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        text-overflow: ellipsis;
      }

      .emotion-5 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        position: absolute;
        right: 0;
        padding-right: 4px;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
      }

      .emotion-4 {
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
        -webkit-transition-property: background,border,-webkit-transform;
        -webkit-transition-property: background,border,transform;
        transition-property: background,border,transform;
        -webkit-transition-duration: 0.2s;
        transition-duration: 0.2s;
        -webkit-transition-timing-function: ease-in-out;
        transition-timing-function: ease-in-out;
        padding-left: 16px;
        padding-right: 16px;
        padding-top: 8px;
        padding-bottom: 8px;
        color: white;
        background-color: primary;
        border: 0;
        border-radius: default;
        padding: 4px;
        height: 20px;
        padding: 0;
        -webkit-transition: -webkit-transform 0.2s ease-in-out;
        -webkit-transition: transform 0.2s ease-in-out;
        transition: transform 0.2s ease-in-out;
      }

      .emotion-4:hover {
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

      .emotion-8 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        background-color: purple;
      }

      <div
        aria-expanded={false}
        aria-owns={null}
        className="emotion-8"
        onClick={[Function]}
        onKeyDown={[Function]}
        onMouseDown={[Function]}
        role="combobox"
      >
        <label
          className="emotion-0"
          htmlFor="kodiak-autocomplete-3"
          id="kodiak-autocomplete-3-label"
        >
          Autocomplete test
        </label>
        <div
          className="emotion-2"
        >
          <div
            className="emotion-6"
          >
            <input
              aria-activedescendant={null}
              aria-autocomplete="list"
              aria-controls={null}
              autoCapitalize="none"
              autoComplete="none"
              className="emotion-1"
              disabled={false}
              id="kodiak-autocomplete-3"
              onBlur={[Function]}
              onChange={[Function]}
              onFocus={[Function]}
              onMouseDown={[Function]}
              spellCheck={false}
              type="text"
              value=""
            />
            <div
              className="emotion-5"
            >
              <button
                className="emotion-4"
                disabled={false}
                onClick={[Function]}
                tabIndex={-1}
              >
                <svg
                  className="emotion-2"
                  height="20"
                  viewBox="0 0 24 24"
                  width="20"
                >
                  <title />
                  <desc />
                  <path
                    d="M0 0h24v24H0z"
                    fill="none"
                  />
                  <path
                    d="M7 10l5 5 5-5z"
                    fill="currentColor"
                  />
                </svg>
                <span
                  className="emotion-3"
                >
                  Toggle the list of options
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `)
  })

  it('should render the Autocomplete components', () => {
    expect(
      renderer
        .create(<Autocomplete label="Autocomplete test" options={options} />)
        .toJSON(),
    ).toMatchInlineSnapshot(`
      .emotion-2 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
      }

      .emotion-0 {
        box-sizing: border-box;
        display: inline-block;
        margin: 0;
        min-width: 0;
      }

      .emotion-6 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        padding: 0;
        position: relative;
        width: 100%;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        padding-left: 2px;
        padding-right: 56px;
      }

      .emotion-1 {
        margin: 0;
        min-width: 0;
        display: block;
        width: 100%;
        padding: 8px;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        font-size: inherit;
        line-height: inherit;
        border: 1px solid;
        color: inherit;
        background-color: transparent;
        padding-left: 4px;
        padding-right: 4px;
        padding-top: 2px;
        padding-bottom: 2px;
        width: 0;
        min-width: 30px;
        -webkit-box-flex: 1;
        -webkit-flex-grow: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        text-overflow: ellipsis;
      }

      .emotion-5 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        position: absolute;
        right: 0;
        padding-right: 4px;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
      }

      .emotion-4 {
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
        -webkit-transition-property: background,border,-webkit-transform;
        -webkit-transition-property: background,border,transform;
        transition-property: background,border,transform;
        -webkit-transition-duration: 0.2s;
        transition-duration: 0.2s;
        -webkit-transition-timing-function: ease-in-out;
        transition-timing-function: ease-in-out;
        padding-left: 16px;
        padding-right: 16px;
        padding-top: 8px;
        padding-bottom: 8px;
        color: white;
        background-color: primary;
        border: 0;
        border-radius: default;
        padding: 4px;
        height: 20px;
        padding: 0;
        -webkit-transition: -webkit-transform 0.2s ease-in-out;
        -webkit-transition: transform 0.2s ease-in-out;
        transition: transform 0.2s ease-in-out;
      }

      .emotion-4:hover {
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

      <div
        aria-expanded={false}
        aria-owns={null}
        className="emotion-2"
        onClick={[Function]}
        onKeyDown={[Function]}
        onMouseDown={[Function]}
        role="combobox"
      >
        <label
          className="emotion-0"
          htmlFor="kodiak-autocomplete-4"
          id="kodiak-autocomplete-4-label"
        >
          Autocomplete test
        </label>
        <div
          className="emotion-2"
        >
          <div
            className="emotion-6"
          >
            <input
              aria-activedescendant={null}
              aria-autocomplete="list"
              aria-controls={null}
              autoCapitalize="none"
              autoComplete="none"
              className="emotion-1"
              disabled={false}
              id="kodiak-autocomplete-4"
              onBlur={[Function]}
              onChange={[Function]}
              onFocus={[Function]}
              onMouseDown={[Function]}
              spellCheck={false}
              type="text"
              value=""
            />
            <div
              className="emotion-5"
            >
              <button
                className="emotion-4"
                disabled={false}
                onClick={[Function]}
                tabIndex={-1}
              >
                <svg
                  className="emotion-2"
                  height="20"
                  viewBox="0 0 24 24"
                  width="20"
                >
                  <title />
                  <desc />
                  <path
                    d="M0 0h24v24H0z"
                    fill="none"
                  />
                  <path
                    d="M7 10l5 5 5-5z"
                    fill="currentColor"
                  />
                </svg>
                <span
                  className="emotion-3"
                >
                  Toggle the list of options
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `)
  })
})
