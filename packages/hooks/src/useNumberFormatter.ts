import * as React from 'react'

export default function useNumberFormatter(
  locale?: string,
  options?: Intl.NumberFormatOptions,
) {
  const optionsRef = React.useRef(options)
  optionsRef.current = options
  const numberFormatter = React.useMemo(() => {
    return function formatNumber(number: number) {
      const numberFormat = new Intl.NumberFormat(locale, optionsRef.current)
      return numberFormat.format(number)
    }
  }, [locale])

  return numberFormatter
}
