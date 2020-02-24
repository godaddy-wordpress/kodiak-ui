import * as React from 'react'
import serializer from 'jest-emotion'
import renderer from 'react-test-renderer'
import { Menu } from '../Menu'
import { MenuItem } from '../MenuItem'
import { VisuallyHidden } from '../../VisuallyHidden'

expect.addSnapshotSerializer(serializer)

describe('Menu', () => {
  it('should render the Menu', () => {
    expect(renderer.create(<Menu aria-label="Menu in test"></Menu>).toJSON())
      .toMatchInlineSnapshot(`
      .emotion-1 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
      }

      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        list-style: none;
        margin: 0;
        padding: 0;
      }

      <nav
        className="emotion-1"
      >
        <ul
          aria-label="Menu in test"
          className="emotion-0"
        />
      </nav>
    `)
  })

  it('should allow span menu items with accessible labels', () => {
    expect(
      renderer
        .create(
          <MenuItem as="span">
            <VisuallyHidden>Current category: </VisuallyHidden>
            Product announcements
          </MenuItem>,
        )
        .toJSON(),
    ).toMatchInlineSnapshot(`
      .emotion-1 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
      }

      .emotion-0 {
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
        className="emotion-1"
      >
        <li>
          <span
            className="emotion-1"
          >
            <span
              className="emotion-0"
            >
              Current category: 
            </span>
            Product announcements
          </span>
        </li>
      </div>
    `)
  })

  it('should render the MenuItems', () => {
    expect(
      renderer
        .create(
          <Menu aria-label="Menu with current">
            <MenuItem>Item 0</MenuItem>
            <MenuItem isCurrent={true}>Item 1</MenuItem>
            <MenuItem>Item 2</MenuItem>
          </Menu>,
        )
        .toJSON(),
    ).toMatchInlineSnapshot(`
.emotion-1 {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
}

.emotion-6 {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  list-style: none;
  margin: 0;
  padding: 0;
}

.emotion-0 {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  -webkit-text-decoration: none;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

<nav
  className="emotion-1"
>
  <ul
    aria-label="Menu with current"
    className="emotion-6"
  >
    <div
      className="emotion-1"
    >
      <li>
        <a
          className="emotion-0"
        >
          Item 0
        </a>
      </li>
    </div>
    <div
      className="emotion-1"
    >
      <li>
        <a
          aria-current={true}
          className="emotion-0"
        >
          Item 1
        </a>
      </li>
    </div>
    <div
      className="emotion-1"
    >
      <li>
        <a
          className="emotion-0"
        >
          Item 2
        </a>
      </li>
    </div>
  </ul>
</nav>
`)
  })
})
