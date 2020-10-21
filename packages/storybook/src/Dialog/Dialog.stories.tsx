import * as React from 'react'
import { useTransition, animated } from 'react-spring'
import {
  Dialog,
  DialogOverlay,
  DialogContainer,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from '@kodiak-ui/dialog'
import { Button, Text } from '@kodiak-ui/primitives'

export default { title: 'Dialog', component: Dialog }

export function Initial() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Show default example</Button>
      <Dialog
        isOpen={isOpen}
        title={
          <div>
            <Text as="h3" sx={{ mb: 2 }}>
              Testing
            </Text>
            <Text sx={{ mb: 0 }}>Testing some text</Text>
          </div>
        }
        // eslint-disable-next-line @typescript-eslint/no-empty-function
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
          {/* eslint-disable-next-line @typescript-eslint/no-empty-function */}
          <Button onClick={() => setIsOpen(false)} sx={{ ml: 'auto' }}>
            Close
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  )
}

export function Expanding() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [displayMoreContent, setDisplayMoreContent] = React.useState(false)

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Show expanding example</Button>
      <Dialog
        isOpen={isOpen}
        title="Dialog that grows with the content"
        onDismiss={() => setIsOpen(false)}
      >
        <DialogContent>
          <Text as="p">
            The modal will grow until the max-height that is set in the theme
            and then will scroll to display content.
          </Text>
          <Button
            onClick={() => setDisplayMoreContent(!displayMoreContent)}
            sx={{ mt: 2 }}
          >
            Display more content
          </Button>
          {displayMoreContent && (
            <>
              <Text as="p" sx={{ my: 2 }}>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of &quot;de
                Finibus Bonorum et Malorum&quot; (The Extremes of Good and Evil)
                by Cicero, written in 45 BC. This book is a treatise on the
                theory of ethics, very popular during the Renaissance. The first
                line of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;,
                comes from a line in section 1.10.32. The standard chunk of
                Lorem Ipsum used since the 1500s is reproduced below for those
                interested. Sections 1.10.32 and 1.10.33 from &quot;de Finibus
                Bonorum et Malorum&quot; by Cicero are also reproduced in their
                exact original form, accompanied by English versions from the
                1914 translation by H. Rackham.
              </Text>
              <Text as="p" sx={{ my: 2 }}>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of &quot;de
                Finibus Bonorum et Malorum&quot; (The Extremes of Good and Evil)
                by Cicero, written in 45 BC. This book is a treatise on the
                theory of ethics, very popular during the Renaissance. The first
                line of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;,
                comes from a line in section 1.10.32. The standard chunk of
                Lorem Ipsum used since the 1500s is reproduced below for those
                interested. Sections 1.10.32 and 1.10.33 from &quot;de Finibus
                Bonorum et Malorum&quot; by Cicero are also reproduced in their
                exact original form, accompanied by English versions from the
                1914 translation by H. Rackham.
              </Text>
              <Text as="p" sx={{ my: 2 }}>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of &quot;de
                Finibus Bonorum et Malorum&quot; (The Extremes of Good and Evil)
                by Cicero, written in 45 BC. This book is a treatise on the
                theory of ethics, very popular during the Renaissance. The first
                line of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;,
                comes from a line in section 1.10.32. The standard chunk of
                Lorem Ipsum used since the 1500s is reproduced below for those
                interested. Sections 1.10.32 and 1.10.33 from &quot;de Finibus
                Bonorum et Malorum&quot; by Cicero are also reproduced in their
                exact original form, accompanied by English versions from the
                1914 translation by H. Rackham.
              </Text>
            </>
          )}
        </DialogContent>
        <DialogFooter>
          <Button onClick={() => setIsOpen(false)} sx={{ ml: 'auto' }}>
            Close
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  )
}

export function FullWidth() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Show full-width example</Button>
      <Dialog
        isOpen={isOpen}
        title="Full-width dialog example"
        variant="fullWidth"
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
          <Button onClick={() => setIsOpen(false)} sx={{ ml: 'auto' }}>
            Close
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  )
}

export function BlockDismiss() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Show dismiss example</Button>
      <Dialog
        isOpen={isOpen}
        title={
          <div>
            <Text as="h3" sx={{ mb: 2 }}>
              Testing
            </Text>
            <Text sx={{ mb: 0 }}>Testing some text</Text>
          </div>
        }
        onOverlayDismiss={() => alert('blocked from overlay and ESC closing')}
        onDismiss={() => alert('blocked from closing from close icon')}
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
          {/* eslint-disable-next-line @typescript-eslint/no-empty-function */}
          <Button onClick={() => setIsOpen(false)} sx={{ ml: 'auto' }}>
            Close
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  )
}

export function Animated() {
  const AnimatedDialogOverlay = animated(DialogOverlay)
  const AnimatedDialogContent = animated(DialogContainer)
  const [isOpen, setIsOpen] = React.useState(false)
  const transitions = useTransition<boolean, any>(isOpen, null, {
    from: { opacity: 0, y: -10 },
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 0, y: -10 },
  })

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Show animated example</Button>
      {transitions.map(
        ({ item, key, props: styles }) =>
          item && (
            <AnimatedDialogOverlay key={key} variant="blurred">
              <AnimatedDialogContent
                style={{
                  transform: styles.y.interpolate(
                    (value: number) => `translate3d(0px, ${value}px, 0px)`,
                  ),
                }}
              >
                <DialogHeader onDismiss={() => setIsOpen(false)}>
                  An animated dialog example
                </DialogHeader>
                <DialogContent>
                  <Text as="p">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going through
                    the cites of the word in classical literature, discovered
                    the undoubtable source. Lorem Ipsum comes from sections
                    1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et
                    Malorum&quot; (The Extremes of Good and Evil) by Cicero,
                    written in 45 BC. This book is a treatise on the theory of
                    ethics, very popular during the Renaissance. The first line
                    of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;,
                    comes from a line in section 1.10.32. The standard chunk of
                    Lorem Ipsum used since the 1500s is reproduced below for
                    those interested. Sections 1.10.32 and 1.10.33 from &quot;de
                    Finibus Bonorum et Malorum&quot; by Cicero are also
                    reproduced in their exact original form, accompanied by
                    English versions from the 1914 translation by H. Rackham.
                  </Text>
                </DialogContent>
                <DialogFooter>
                  <Button onClick={() => setIsOpen(false)} sx={{ ml: 'auto' }}>
                    Close
                  </Button>
                </DialogFooter>
              </AnimatedDialogContent>
            </AnimatedDialogOverlay>
          ),
      )}
    </div>
  )
}
