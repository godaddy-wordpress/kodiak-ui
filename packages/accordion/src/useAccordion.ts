import * as React from 'react'
// import { hasKey, setAttributes } from '@kodiak-ui/utils'

export function useAccordion<KeyType>({
  defaultExpandedItems = [],
  onChange,
  allowMultiple,
}: {
  defaultExpandedItems?: KeyType[]
  onChange?: ({ expandedItems }: { expandedItems: KeyType[] }) => void
  allowMultiple?: boolean
}) {
  const [expandedItems, setExpandedItems] = React.useState<KeyType[]>(
    defaultExpandedItems,
  )

  const handleSetExpandedItemsChange = React.useCallback(
    (expanded: KeyType[] | KeyType) => {
      const newExpanded = Array.isArray(expanded) ? expanded : [expanded]
      onChange && onChange({ expandedItems: newExpanded })
      setExpandedItems(newExpanded)
    },
    [onChange],
  )

  const checkIsExpanded = React.useCallback(
    function checkIsExpanded({ key }: { key: KeyType }) {
      return Array.isArray(expandedItems) && expandedItems.includes(key)
    },
    [expandedItems],
  )

  const toggleExpanded = React.useCallback(
    function toggleExpanded({ key }: { key: KeyType }) {
      if (allowMultiple) {
        // Just toggle the current one in the array
        const newExpanded = Array.isArray(expandedItems) ? expandedItems : []

        if (!checkIsExpanded({ key })) {
          handleSetExpandedItemsChange([...newExpanded, key])
        } else {
          handleSetExpandedItemsChange(
            newExpanded.filter(expandedItem => expandedItem !== key),
          )
        }
      } else {
        if (!checkIsExpanded({ key })) {
          handleSetExpandedItemsChange([key])
        } else {
          handleSetExpandedItemsChange([])
        }
      }
    },
    [
      checkIsExpanded,
      handleSetExpandedItemsChange,
      allowMultiple,
      expandedItems,
    ],
  )

  return {
    expandedItems,
    toggleExpanded,
    checkIsExpanded,
    setExpandedItems: handleSetExpandedItemsChange,
  }
}
