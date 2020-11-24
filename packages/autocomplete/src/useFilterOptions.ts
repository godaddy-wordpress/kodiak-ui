import { useCallback, useMemo } from 'react'

function stripDiacritics(string: string) {
  return typeof string.normalize !== 'undefined'
    ? string.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    : string
}

export type UseFilterOptionsProps = {
  isOpen: boolean
  options: string[]
  inputValue: string
  ignoreAccents?: boolean
  ignoreCase?: boolean
  trim?: boolean
  limit?: number
  matchFrom?: 'any' | 'start'
}

export function useFilterOptions({
  isOpen,
  options,
  inputValue,
  ignoreAccents = true,
  ignoreCase = true,
  trim = false,
  limit,
  matchFrom = 'any',
}: UseFilterOptionsProps) {
  const handleFilterOptions = useCallback(() => {
    let input = trim ? inputValue?.trim() : inputValue

    if (ignoreCase) {
      input = input.toLowerCase()
    }

    if (ignoreAccents) {
      input = stripDiacritics(input)
    }

    const filteredOptions = options?.filter(option => {
      let candidate = option

      if (ignoreCase) {
        candidate = candidate.toLowerCase()
      }

      if (ignoreAccents) {
        candidate = stripDiacritics(candidate)
      }

      return matchFrom === 'start'
        ? candidate.indexOf(input) === 0
        : candidate.indexOf(input) > -1
    })

    return limit ? filteredOptions?.slice(0, limit) : filteredOptions
  }, [ignoreAccents, ignoreCase, inputValue, limit, matchFrom, options, trim])

  const filteredOptions = useMemo(() => isOpen && handleFilterOptions(), [
    handleFilterOptions,
    isOpen,
  ])

  return filteredOptions || []
}
