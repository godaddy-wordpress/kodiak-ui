import * as React from 'react'
import { Box, Flex, Button } from '@kodiak-ui/primitives'
import { Skeleton, Repeat } from '@kodiak-ui/skeleton'
import { Styled } from 'theme-ui'

export default { title: 'Skeleton' }

export function LoadingSkeleton() {
  const [isLoading, setIsLoading] = React.useState(true)

  return (
    <Box sx={{ margin: 4 }}>
      <Styled.h1>{isLoading ? <Skeleton /> : 'Loaded text'}</Styled.h1>
      <Box>
        <Flex>
          {isLoading ? (
            <Skeleton
              variant="circle"
              sx={{
                mr: 4,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
          ) : (
            <Flex
              sx={{
                borderRadius: 'full',
                height: '50px',
                width: '50px',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'cyan.3',
                color: 'white',
                mr: 4,
              }}
            >
              A
            </Flex>
          )}
          <Flex
            sx={{
              fontSize: 1,
              lineHeight: 'body',
              flexDirection: 'column',
              flexGrow: 1,
            }}
          >
            {isLoading ? (
              <Repeat count={3}>
                <Skeleton sx={{ maxWidth: '80%' }} />
              </Repeat>
            ) : (
              <Flex
                sx={{
                  fontSize: 1,
                  lineHeight: 'body',
                  flexDirection: 'column',
                }}
              >
                Multiple lines of text appear
                <br />
                Awesome sauce
                <br />
                Multiple lines of text
                <br />
              </Flex>
            )}
          </Flex>
        </Flex>
      </Box>
      <Button
        sx={{ mt: 5 }}
        variant="secondary"
        onClick={() => setIsLoading(!isLoading)}
      >
        Toggle loading
      </Button>
    </Box>
  )
}
