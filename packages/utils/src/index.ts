export const __DEV__ = process.env.NODE_ENV !== 'production'

export function hasKey<O>(
  obj: O,
  key: string | number | symbol,
): key is keyof O {
  return key in obj
}

export function setAttributes<T extends Element | null>(
  element: T,
  attributes: { [key: string]: string },
): void {
  Object.keys(attributes).forEach(
    key =>
      element &&
      hasKey(attributes, key) &&
      element.setAttribute(key, attributes[key]),
  )
}

interface NextIndexProps {
  moveAmount: number
  baseIndex: number
  items: { [key: string]: Element | null }
  getItemNodeFromIndex: (index: number) => Element | null
  circular?: boolean
}

function getNextNonDisabledIndex({
  moveAmount,
  baseIndex,
  items,
  getItemNodeFromIndex,
  circular = true,
}: NextIndexProps): number {
  const itemCount = Object.keys(items).length
  const currentElementNode = getItemNodeFromIndex(baseIndex)

  if (!currentElementNode || !currentElementNode.hasAttribute('disabled')) {
    return baseIndex
  }

  if (moveAmount > 0) {
    for (let index = baseIndex + 1; index < itemCount; index++) {
      const node = getItemNodeFromIndex(index)
      if (node && !node.hasAttribute('disabled')) {
        return index
      }
    }
  } else {
    for (let index = baseIndex - 1; index >= 0; index--) {
      const node = getItemNodeFromIndex(index)
      if (node && !node.hasAttribute('disabled')) {
        return index
      }
    }
  }

  if (circular) {
    return moveAmount > 0
      ? getNextNonDisabledIndex({
          moveAmount: 1,
          baseIndex: 0,
          items,
          getItemNodeFromIndex,
          circular: false,
        })
      : getNextNonDisabledIndex({
          moveAmount: -1,
          baseIndex: itemCount - 1,
          items,
          getItemNodeFromIndex,
          circular: false,
        })
  }

  return -1
}

export function getNextIndex({
  moveAmount,
  baseIndex,
  items,
  getItemNodeFromIndex,
  circular = true,
}: NextIndexProps): number {
  const itemCount = Object.keys(items).length
  const lastIndex = itemCount - 1

  if (
    typeof baseIndex !== 'number' ||
    baseIndex < 0 ||
    baseIndex >= itemCount
  ) {
    baseIndex = moveAmount > 0 ? -1 : lastIndex + 1
  }

  let newIndex = baseIndex + moveAmount

  if (newIndex < 0) {
    newIndex = lastIndex
  } else if (newIndex > lastIndex) {
    newIndex = 0
  }

  const nonDisabledNewIndex = getNextNonDisabledIndex({
    moveAmount,
    baseIndex: newIndex,
    items,
    getItemNodeFromIndex,
    circular,
  })

  return nonDisabledNewIndex === -1 ? newIndex : nonDisabledNewIndex
}
