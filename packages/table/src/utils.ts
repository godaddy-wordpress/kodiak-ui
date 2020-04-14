export function hasKey<O>(
  obj: O,
  key: string | number | symbol,
): key is keyof O {
  return key in obj
}

/**
 * Create all of the HTML attributes for an element
 *
 * Loops over the object keys and sets the attribute on the element for each key
 */
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
