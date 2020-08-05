import * as React from 'react'
import serializer from 'jest-emotion'
import renderer from 'react-test-renderer'
import { Stat } from '..'

expect.addSnapshotSerializer(serializer)

describe('Stat', () => {
  it('should render the Stat bar', () => {
    expect(renderer.create(<Stat></Stat>).toJSON()).toMatchInlineSnapshot(`
    `)
  })
})
