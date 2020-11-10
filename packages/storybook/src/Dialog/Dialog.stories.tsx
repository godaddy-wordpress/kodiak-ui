import * as React from 'react'
import { SharedSx, variant } from 'kodiak-ui'
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
              Are you sure you want to deactivate your account? All of your data
              will be permanently removed. This action cannot be undone.
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
