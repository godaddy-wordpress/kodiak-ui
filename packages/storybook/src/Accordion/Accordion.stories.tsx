import * as React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
  AccordionFooter,
} from '@kodiak-ui/accordion'
import { Text } from '@kodiak-ui/primitives'

export default { title: 'Accordion' }

function checkIsExpanded<T>({ key, expanded }: { key: T; expanded?: T | T[] }) {
  if (Array.isArray(expanded)) {
    return expanded.includes(key)
  } else {
    return key === expanded
  }
}

export function Initial() {
  const [expanded, setExpanded] = React.useState<string | null>(null)

  function toggleExpanded({ key }: { key: string }) {
    if (!checkIsExpanded({ key, expanded })) {
      setExpanded(key)
    } else {
      setExpanded(null)
    }
  }

  return (
    <Accordion sx={{ p: 6 }}>
      <AccordionItem
        sx={{
          border: '1px solid',
          borderColor: 'gray.2',
          borderRadius: 'default',
          maxWidth: '800px',
        }}
      >
        <AccordionHeader
          aria-expanded={checkIsExpanded({ key: 'first', expanded })}
          tabIndex={0}
          onClick={event => {
            toggleExpanded({ key: 'first' })
          }}
          onKeyUp={event => {
            if (['Enter', ' '].includes(event.key)) {
              toggleExpanded({ key: 'first' })
            }
          }}
          sx={{
            outline: 'none',
            px: 4,
            py: 5,
          }}
        >
          <Text fontWeight="bold" fontSize={3} mb={0}>
            Accordion header - toggle me
          </Text>
        </AccordionHeader>
        {checkIsExpanded({ key: 'first', expanded }) && (
          <>
            <AccordionBody
              sx={{
                borderTop: '1px solid',
                borderBottom: '1px solid',
                borderColor: 'gray.2',
                px: 4,
                py: 5,
              }}
            >
              Body
            </AccordionBody>
            <AccordionFooter
              sx={{
                px: 4,
                py: 5,
              }}
            >
              Footer
            </AccordionFooter>
          </>
        )}
      </AccordionItem>
    </Accordion>
  )
}
