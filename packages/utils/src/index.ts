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
