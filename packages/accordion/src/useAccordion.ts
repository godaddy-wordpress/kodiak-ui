import * as React from 'react'
// import { hasKey, setAttributes } from '@kodiak-ui/utils'

export function useAccordion<KeyType>({
  defaultExpanded = [],
  onChange,
  allowMultiple,
}: {
  defaultExpanded?: KeyType[]
  onChange?: ({ expanded }: { expanded: KeyType[] }) => void
  allowMultiple?: boolean
}) {
  const [expanded, setExpanded] = React.useState<KeyType[]>(defaultExpanded)

  const handleSetExpandedChange = React.useCallback(
    (expanded: KeyType[] | KeyType) => {
      const newExpanded = Array.isArray(expanded) ? expanded : [expanded]
      onChange && onChange({ expanded: newExpanded })
      setExpanded(newExpanded)
    },
    [onChange],
  )

  const checkIsExpanded = React.useCallback(
    function checkIsExpanded({ key }: { key: KeyType }) {
      return Array.isArray(expanded) && expanded.includes(key)
    },
    [expanded],
  )

  const toggleExpanded = React.useCallback(
    function toggleExpanded({ key }: { key: KeyType }) {
      if (allowMultiple) {
        // Just toggle the current one in the array
        const newExpanded = Array.isArray(expanded) ? expanded : []

        if (!checkIsExpanded({ key })) {
          handleSetExpandedChange([...newExpanded, key])
        } else {
          handleSetExpandedChange(
            newExpanded.filter(expandedItem => expandedItem !== key),
          )
        }
      } else {
        if (!checkIsExpanded({ key })) {
          handleSetExpandedChange([key])
        } else {
          handleSetExpandedChange([])
        }
      }
    },
    [checkIsExpanded, handleSetExpandedChange, allowMultiple, expanded],
  )

  return {
    expanded,
    toggleExpanded,
    checkIsExpanded,
    setExpanded: handleSetExpandedChange,
  }
}
