import * as React from 'react'
import serializer from 'jest-emotion'
import renderer from 'react-test-renderer'
import { Grid } from '../Grid'

expect.addSnapshotSerializer(serializer)

describe('Box', () => {
  it('should render the Grid as a div element', () => {
    expect(renderer.create(<Grid>Rendering Grid element</Grid>).toJSON())
      .toMatchInlineSnapshot(`
      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        display: grid;
      }

      <div
        className="emotion-0"
      >
        Rendering Grid element
      </div>
    `)
  })

  it('should style the element with styled-system props', () => {
    expect(
      renderer
        .create(
          <Grid gridGap={3} gridTemplateColumns={['auto', '1fr 256px']}>
            <div></div>
            <div></div>
          </Grid>,
        )
        .toJSON(),
    ).toMatchInlineSnapshot(`
      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        grid-gap: 16px;
        grid-template-columns: auto;
        display: grid;
      }

      @media screen and (min-width:40em) {
        .emotion-0 {
          grid-template-columns: 1fr 256px;
        }
      }

      <div
        className="emotion-0"
      >
        <div />
        <div />
      </div>
    `)
  })
})
