import * as React from 'react'
import serializer from '@emotion/jest'
import renderer from 'react-test-renderer'
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
  AccordionFooter,
} from '../'

describe('Accordion', () => {
  it('should render the Accordion', () => {
    expect(
      renderer
        .create(
          <Accordion>
            <AccordionItem>
              <AccordionHeader>Header</AccordionHeader>
              <AccordionBody>Body</AccordionBody>
              <AccordionFooter>Footer</AccordionFooter>
            </AccordionItem>
          </Accordion>,
        )
        .toJSON(),
    ).toMatchInlineSnapshot(`
      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
      }

      <div
        className="emotion-0"
      >
        <div
          className="emotion-0"
        >
          <header
            className="emotion-0"
          >
            Header
          </header>
          <section
            className="emotion-0"
          >
            Body
          </section>
          <div
            className="emotion-0"
          >
            Footer
          </div>
        </div>
      </div>
    `)
  })
})
