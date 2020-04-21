import * as React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
  AccordionFooter,
  useAccordion,
} from '@kodiak-ui/accordion'
import { Flex, Text, SvgIcon, Button } from '@kodiak-ui/primitives'

export default { title: 'Accordion' }

function CaretFillDown({ ...props }) {
  return (
    <SvgIcon viewBox="0 0 16 16" height="16px" width="16px" {...props}>
      <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 01.753 1.659l-4.796 5.48a1 1 0 01-1.506 0z" />
    </SvgIcon>
  )
}

function checkIsExpanded<T>({ key, expanded }: { key: T; expanded?: T | T[] }) {
  if (Array.isArray(expanded)) {
    return expanded.includes(key)
  } else {
    return key === expanded
  }
}

export function FullyControlled() {
  const [expanded, setExpanded] = React.useState<string | null>(null)

  function toggleExpanded({ key }: { key: string }) {
    if (!checkIsExpanded({ key, expanded })) {
      setExpanded(key)
    } else {
      setExpanded(null)
    }
  }

  return (
    <Accordion
      sx={{
        p: 6,
        '& > *:not(:last-child)': {
          mb: 4,
        },
      }}
    >
      <AccordionItem>
        <AccordionHeader
          id="firstAccordion"
          aria-expanded={checkIsExpanded({ key: 'first', expanded })}
          aria-controls="firstBody"
          tabIndex={0}
          onClick={() => {
            toggleExpanded({ key: 'first' })
          }}
          onKeyUp={(event: any) => {
            if (['Enter', ' '].includes(event.key)) {
              toggleExpanded({ key: 'first' })
            }
          }}
          sx={{
            outline: 'none',
            px: 4,
            py: 5,
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text fontWeight="bold" fontSize={3} mb={0}>
            Accordion header - toggle me
          </Text>
          <CaretFillDown
            sx={{
              transform: checkIsExpanded({ key: 'first', expanded })
                ? 'rotate(180deg)'
                : 'rotate(0)',
            }}
          />
        </AccordionHeader>
        {checkIsExpanded({ key: 'first', expanded }) && (
          <>
            <AccordionBody
              id="firstBody"
              aria-labelledby="firstAccordion"
              role="region"
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

      <AccordionItem
        sx={{
          border: '1px solid',
          borderColor: 'gray.2',
          borderRadius: 'default',
          maxWidth: '400px',
        }}
      >
        <AccordionHeader
          id="secondAccordion"
          aria-expanded={checkIsExpanded({ key: 'second', expanded })}
          aria-controls="secondBody"
          tabIndex={0}
          onClick={() => {
            toggleExpanded({ key: 'second' })
          }}
          onKeyUp={(event: any) => {
            if (['Enter', ' '].includes(event.key)) {
              toggleExpanded({ key: 'second' })
            }
          }}
          sx={{
            outline: 'none',
            px: 4,
            py: 5,
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text fontWeight="bold" fontSize={3} mb={0}>
            Accordion header - toggle me
          </Text>
          <CaretFillDown
            sx={{
              transform: checkIsExpanded({ key: 'second', expanded })
                ? 'rotate(180deg)'
                : 'rotate(0)',
            }}
          />
        </AccordionHeader>
        {checkIsExpanded({ key: 'second', expanded }) && (
          <>
            <AccordionBody
              id="secondBody"
              aria-labelledby="secondAccordion"
              role="region"
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

export function AccordionHookSingle() {
  const { setExpanded, toggleExpanded, checkIsExpanded } = useAccordion<string>(
    {
      onChange: ({ expanded }) => console.info({ expanded }),
      defaultExpanded: ['second'],
      allowMultiple: false,
    },
  )

  return (
    <Flex sx={{ flexDirection: 'column', p: 6 }}>
      <Accordion>
        <AccordionItem>
          <AccordionHeader
            id="firstAccordion"
            aria-expanded={checkIsExpanded({ key: 'first' })}
            aria-controls="firstBody"
            tabIndex={-1}
            onClick={() => {
              toggleExpanded({ key: 'first' })
            }}
            onKeyUp={(event: any) => {
              if (['Enter', ' '].includes(event.key)) {
                toggleExpanded({ key: 'first' })
              }
            }}
          >
            <Text fontWeight="bold" fontSize={3} mb={0}>
              Accordion header - toggle me
            </Text>
            <CaretFillDown
              tabIndex={0}
              onClick={() => {
                toggleExpanded({ key: 'first' })
              }}
              sx={{
                transform: checkIsExpanded({ key: 'first' })
                  ? 'rotate(180deg)'
                  : 'rotate(0)',
              }}
            />
          </AccordionHeader>
          {checkIsExpanded({ key: 'first' }) && (
            <>
              <AccordionBody
                id="firstBody"
                aria-labelledby="firstAccordion"
                role="region"
              >
                Body
              </AccordionBody>
              <AccordionFooter>Footer</AccordionFooter>
            </>
          )}
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader
            id="secondAccordion"
            aria-expanded={checkIsExpanded({ key: 'second' })}
            aria-controls="secondBody"
            tabIndex={-1}
            onClick={() => {
              toggleExpanded({ key: 'second' })
            }}
            onKeyUp={(event: any) => {
              if (['Enter', ' '].includes(event.key)) {
                toggleExpanded({ key: 'second' })
              }
            }}
          >
            <Text fontWeight="bold" fontSize={3} mb={0}>
              Accordion header - toggle me
            </Text>
            <CaretFillDown
              tabIndex={0}
              onClick={() => {
                toggleExpanded({ key: 'first' })
              }}
              sx={{
                transform: checkIsExpanded({ key: 'second' })
                  ? 'rotate(180deg)'
                  : 'rotate(0)',
              }}
            />
          </AccordionHeader>
          {checkIsExpanded({ key: 'second' }) && (
            <>
              <AccordionBody
                id="secondBody"
                aria-labelledby="secondAccordion"
                role="region"
              >
                Body
              </AccordionBody>
              <AccordionFooter>Footer</AccordionFooter>
            </>
          )}
        </AccordionItem>
      </Accordion>
      <Flex sx={{ pt: 6 }}>
        <Button variant="secondary" onClick={() => setExpanded(['first'])}>
          Open first
        </Button>
      </Flex>
    </Flex>
  )
}

export function AccordionHookMultiple() {
  const {
    expanded,
    setExpanded,
    toggleExpanded,
    checkIsExpanded,
  } = useAccordion<string>({
    defaultExpanded: ['first'],
    allowMultiple: true,
  })

  return (
    <Flex sx={{ flexDirection: 'column', p: 6 }}>
      <Accordion>
        <AccordionItem>
          <AccordionHeader
            id="firstAccordion"
            aria-expanded={checkIsExpanded({ key: 'first' })}
            aria-controls="firstBody"
            tabIndex={0}
            onClick={() => {
              toggleExpanded({ key: 'first' })
            }}
            onKeyUp={(event: any) => {
              if (['Enter', ' '].includes(event.key)) {
                toggleExpanded({ key: 'first' })
              }
            }}
          >
            <Text fontWeight="bold" fontSize={3} mb={0}>
              Accordion header - toggle me
            </Text>
            <CaretFillDown
              sx={{
                transform: checkIsExpanded({ key: 'first' })
                  ? 'rotate(180deg)'
                  : 'rotate(0)',
              }}
            />
          </AccordionHeader>
          {checkIsExpanded({ key: 'first' }) && (
            <>
              <AccordionBody
                id="firstBody"
                aria-labelledby="firstAccordion"
                role="region"
              >
                Body
              </AccordionBody>
              <AccordionFooter>Footer</AccordionFooter>
            </>
          )}
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader
            id="secondAccordion"
            aria-expanded={checkIsExpanded({ key: 'second' })}
            aria-controls="secondBody"
            tabIndex={0}
            onClick={() => {
              toggleExpanded({ key: 'second' })
            }}
            onKeyUp={(event: any) => {
              if (['Enter', ' '].includes(event.key)) {
                toggleExpanded({ key: 'second' })
              }
            }}
          >
            <Text fontWeight="bold" fontSize={3} mb={0}>
              Accordion header - toggle me
            </Text>
            <CaretFillDown
              sx={{
                transform: checkIsExpanded({ key: 'second' })
                  ? 'rotate(180deg)'
                  : 'rotate(0)',
              }}
            />
          </AccordionHeader>
          {checkIsExpanded({ key: 'second' }) && (
            <>
              <AccordionBody
                id="secondBody"
                aria-labelledby="secondAccordion"
                role="region"
              >
                Body
              </AccordionBody>
              <AccordionFooter>Footer</AccordionFooter>
            </>
          )}
        </AccordionItem>
      </Accordion>
      <Flex sx={{ pt: 6 }}>
        <Button variant="secondary" onClick={() => setExpanded(['first'])}>
          Open only the first
        </Button>
      </Flex>

      <Flex sx={{ pt: 6 }}>
        Opened keys: {Array.isArray(expanded) && expanded.join(', ')}
      </Flex>
    </Flex>
  )
}
