import * as React from 'react'
import { Dialog, DialogContent, DialogFooter } from '@kodiak-ui/dialog'
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
        <DialogContent>
          <Text as="p">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot;
            (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
            book is a treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, &quot;Lorem ipsum dolor
            sit amet..&quot;, comes from a line in section 1.10.32. The standard
            chunk of Lorem Ipsum used since the 1500s is reproduced below for
            those interested. Sections 1.10.32 and 1.10.33 from &quot;de Finibus
            Bonorum et Malorum&quot; by Cicero are also reproduced in their
            exact original form, accompanied by English versions from the 1914
            translation by H. Rackham.
          </Text>
        </DialogContent>
        <DialogFooter>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </DialogFooter>
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
