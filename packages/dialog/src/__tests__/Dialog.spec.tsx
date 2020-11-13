import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Text, Button, Header } from '@kodiak-ui/primitives'
import { Dialog, DialogContent, DialogFooter, useDialog } from '../'

function DialogExample() {
  const { getDialogProps, handleOpenDialog, handleCloseDialog } = useDialog()

  return (
    <>
      <div data-testid="outside">
        Some content outside to click on to close the modal
      </div>
      <Button onClick={handleOpenDialog}>Show default example</Button>
      <Dialog {...getDialogProps()}>
        <Header>
          <div>
            <Text as="h3" sx={{ mb: 2 }}>
              Testing
            </Text>
            <Text sx={{ mb: 0 }}>Testing some text</Text>
          </div>
        </Header>
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
          <Button
            onClick={handleCloseDialog}
            data-testid="closeButton"
            sx={{ ml: 'auto' }}
          >
            Close button
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  )
}

describe('Dialog', () => {
  it('should render the full Dialog component with the appropriate default styles', () => {
    const { getByText, queryByText, queryByTestId } = render(<DialogExample />)
    const trigger = getByText('Show default example')

    expect(trigger).toBeTruthy()
    expect(queryByTestId('closeButton')).toBeNull()

    fireEvent.click(trigger)

    expect(getByText('Testing')).toBeTruthy()

    const close = getByText('Close button')
    expect(close)

    fireEvent.click(close)

    expect(queryByText('Testing')).toBeNull()
    expect(queryByTestId('closeButton')).toBeNull()
  })

  it('should close the modal on ESC', () => {
    const { getByText, queryByText, queryByTestId } = render(<DialogExample />)
    const trigger = getByText('Show default example')

    expect(trigger).toBeTruthy()
    expect(queryByTestId('closeButton')).toBeNull()

    fireEvent.click(trigger)

    expect(getByText('Testing')).toBeTruthy()

    fireEvent.keyDown(getByText('Testing'), { key: 'Escape', code: 27 })

    expect(queryByText('Testing')).toBeNull()
    expect(queryByTestId('closeButton')).toBeNull()
  })
})
