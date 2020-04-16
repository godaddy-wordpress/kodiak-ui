import * as React from 'react'
import serializer from 'jest-emotion'
import renderer from 'react-test-renderer'
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
  AccordionFooter,
} from '../'

expect.addSnapshotSerializer(serializer)

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
    `)
  })
})
