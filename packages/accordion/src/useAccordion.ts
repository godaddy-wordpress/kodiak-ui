import * as React from 'react'
import { setAttributes } from '@kodiak-ui/utils'

type RegisterOptions<KeyType> = {
  key: KeyType
  role?: 'accordionHeader' | 'accordionBody'
}

type AccordionRef = HTMLElement

type KeyType = string | number

type GetHeaderPropsReturn = {
  onClick: () => void
  onKeyUp: (event: React.KeyboardEvent) => void
  'aria-expanded': boolean
}

type UseAccordionProps = {
  defaultExpandedItems?: KeyType[]
  expandedItems?: KeyType[]
  onChange?: ({ expandedItems }: { expandedItems: KeyType[] }) => void
  allowMultiple?: boolean
}

export function useAccordion({
  defaultExpandedItems = [],
  expandedItems: controlledExpandedItems,
  onChange,
  allowMultiple,
}: UseAccordionProps) {
  const [expandedItemsLocal, setExpandedItemsLocal] = React.useState<KeyType[]>(
    controlledExpandedItems || defaultExpandedItems,
  )

  const expandedItems = controlledExpandedItems || expandedItemsLocal

  const elementRefDictionary = React.useRef<{
    accordionHeaders: { [key in KeyType]: AccordionRef }
    accordionBodies: { [key in KeyType]: AccordionRef }
  }>({
    accordionHeaders: {},
    accordionBodies: {},
  })

  const handleSetExpandedItemsChange = React.useCallback(
    (expanded: KeyType[] | KeyType) => {
      const newExpanded = Array.isArray(expanded) ? expanded : [expanded]
      onChange && onChange({ expandedItems: newExpanded })
      !controlledExpandedItems && setExpandedItemsLocal(newExpanded)
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

  function registerAccordionHeader({
    ref,
    options,
  }: {
    ref: AccordionRef
    options: RegisterOptions<KeyType>
  }) {
    if (options.role === 'accordionHeader' || ref?.tagName === 'HEADER') {
      const accordionHead = ref
      elementRefDictionary.current.accordionHeaders[options.key] = ref

      const headerId = accordionHead.id
      if (headerId === undefined || headerId === '') {
        setAttributes(accordionHead, { id: `${options.key}` })
      }
    }

    return {
      ref,
      options,
    }
  }

  // Register the body
  function registerAccordionBody({
    ref,
    options,
  }: {
    ref: AccordionRef
    options: RegisterOptions<KeyType>
  }) {
    if (options.role === 'accordionBody' || ref?.tagName === 'SECTION') {
      const accordionBody = ref
      elementRefDictionary.current.accordionBodies[options.key] = ref

      let accordionBodyId = accordionBody.id
      if (accordionBodyId === undefined || accordionBodyId === '') {
        accordionBodyId = options.key + '-Body'
        setAttributes(accordionBody, { id: accordionBodyId })
      }

      // try to link up the aria controls/labelled by
      const accordionHead =
        elementRefDictionary.current.accordionHeaders[options.key]
      if (accordionHead) {
        const headerId = accordionHead.id
        setAttributes(accordionHead, { 'aria-controls': accordionBodyId })
        setAttributes(accordionBody, {
          'aria-labelledby': headerId,
          role: 'region',
        })
      }
    }

    return {
      ref,
      options,
    }
  }

  function register(
    ref: AccordionRef | null,
    options: RegisterOptions<KeyType>,
  ): {
    ref: AccordionRef
    options: RegisterOptions<KeyType>
  } | null {
    return (
      ref && registerAccordionBody(registerAccordionHeader({ ref, options }))
    )
  }

  function getHeaderProps({ key }: { key: KeyType }): GetHeaderPropsReturn {
    return {
      onClick: () => toggleExpanded({ key }),
      onKeyUp: (event: React.KeyboardEvent) => {
        if (['Enter', ' '].includes(event.key)) {
          toggleExpanded({ key })
        }
      },
      'aria-expanded': checkIsExpanded({ key }),
    }
  }

  return {
    register,
    expandedItems,
    toggleExpanded,
    checkIsExpanded,
    setExpandedItems: handleSetExpandedItemsChange,
    getHeaderProps,
  }
}
