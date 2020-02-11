import * as React from 'react'
import { Dialog } from '@kodiak-ui/dialog'
import { Button, Text } from '@kodiak-ui/primitives'

export default { title: 'Dialog' }

export function Initial() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open modal</Button>
      <Dialog
        isOpen={true}
        title={
          <div>
            <Text as="h3" mb={2}>
              Testing
            </Text>
            <Text mb={0}>Testing some text</Text>
          </div>
        }
        onDismiss={() => setIsOpen(false)}
        aria-label="Warning about next steps"
      >
        <p>Content</p>
      </Dialog>
    </>
  )
}

export function FullWidth() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open modal</Button>
      <Dialog
        isOpen={isOpen}
        title="Full-width dialog example"
        variant="fullWidth"
        onDismiss={() => setIsOpen(false)}
        aria-label="Warning about next steps"
      >
        <p>Content</p>
      </Dialog>
    </>
  )
}
