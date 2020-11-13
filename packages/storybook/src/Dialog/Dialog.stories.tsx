import * as React from 'react'
import { component, SharedSx, variant } from 'kodiak-ui'
import { Dialog, useDialog } from '@kodiak-ui/dialog'
import { Button, Content, Header, Footer, Text } from '@kodiak-ui/primitives'

export default { title: 'Dialog', component: Dialog }

variant('dialog-lg', {
  width: '900px',
})

variant('dialog-full', {
  borderRadius: 'none',
  maxWidth: '100%',
  width: '100vw',
  height: '100vh',
})

variant('dialog-header', {
  borderBottom: '1px solid',
  borderColor: 'gray.2',
})

variant('dialog-footer', {
  bg: 'gray.1',
  borderTop: '1px solid',
  borderColor: 'gray.2',
  display: 'flex',
  justifyContent: 'flex-end',

  '> *': {
    ml: 2,
  },
})

variant('scroll', {
  maxHeight: '200px',
  overflow: 'scroll',
})

export function Default() {
  const { getDialogProps, handleOpenDialog, handleCloseDialog } = useDialog()

  return (
    <>
      <Button onClick={handleOpenDialog}>Trigger</Button>

      <Dialog {...getDialogProps()}>
        <SharedSx sx={{ px: 5, py: 4 }}>
          <Header variants="dialog-header">Header</Header>
          <Content>
            <Text as="p">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </Text>
          </Content>
          <Footer variants="dialog-footer">
            <Button variants="secondary" onClick={handleCloseDialog}>
              Cancel
            </Button>
            <Button variants="danger">Proceed</Button>
          </Footer>
        </SharedSx>
      </Dialog>
    </>
  )
}
