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

variant('scroll', {
  maxHeight: '200px',
  overflow: 'scroll',
})

export function Default() {
  const { getDialogProps, handleOpenDialog, handleCloseDialog } = useDialog()

  return (
    <>
      <Button onClick={handleOpenDialog}>Trigger</Button>

      <Text as="p">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and
        Evil) by Cicero, written in 45 BC. This book is a treatise on the theory
        of ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in
        section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s
        is reproduced below for those interested. Sections 1.10.32 and 1.10.33
        from &quot;de Finibus Bonorum et Malorum&quot; by Cicero are also
        reproduced in their exact original form, accompanied by English versions
        from the 1914 translation by H. Rackham
      </Text>

      <Text as="p">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and
        Evil) by Cicero, written in 45 BC. This book is a treatise on the theory
        of ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in
        section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s
        is reproduced below for those interested. Sections 1.10.32 and 1.10.33
        from &quot;de Finibus Bonorum et Malorum&quot; by Cicero are also
        reproduced in their exact original form, accompanied by English versions
        from the 1914 translation by H. Rackham
      </Text>
      <Text as="p">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and
        Evil) by Cicero, written in 45 BC. This book is a treatise on the theory
        of ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in
        section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s
        is reproduced below for those interested. Sections 1.10.32 and 1.10.33
        from &quot;de Finibus Bonorum et Malorum&quot; by Cicero are also
        reproduced in their exact original form, accompanied by English versions
        from the 1914 translation by H. Rackham
      </Text>
      <Text as="p">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and
        Evil) by Cicero, written in 45 BC. This book is a treatise on the theory
        of ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in
        section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s
        is reproduced below for those interested. Sections 1.10.32 and 1.10.33
        from &quot;de Finibus Bonorum et Malorum&quot; by Cicero are also
        reproduced in their exact original form, accompanied by English versions
        from the 1914 translation by H. Rackham
      </Text>
      <Text as="p">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and
        Evil) by Cicero, written in 45 BC. This book is a treatise on the theory
        of ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in
        section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s
        is reproduced below for those interested. Sections 1.10.32 and 1.10.33
        from &quot;de Finibus Bonorum et Malorum&quot; by Cicero are also
        reproduced in their exact original form, accompanied by English versions
        from the 1914 translation by H. Rackham
      </Text>
      <Text as="p">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and
        Evil) by Cicero, written in 45 BC. This book is a treatise on the theory
        of ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in
        section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s
        is reproduced below for those interested. Sections 1.10.32 and 1.10.33
        from &quot;de Finibus Bonorum et Malorum&quot; by Cicero are also
        reproduced in their exact original form, accompanied by English versions
        from the 1914 translation by H. Rackham
      </Text>
      <Text as="p">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and
        Evil) by Cicero, written in 45 BC. This book is a treatise on the theory
        of ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in
        section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s
        is reproduced below for those interested. Sections 1.10.32 and 1.10.33
        from &quot;de Finibus Bonorum et Malorum&quot; by Cicero are also
        reproduced in their exact original form, accompanied by English versions
        from the 1914 translation by H. Rackham
      </Text>
      <Text as="p">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and
        Evil) by Cicero, written in 45 BC. This book is a treatise on the theory
        of ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in
        section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s
        is reproduced below for those interested. Sections 1.10.32 and 1.10.33
        from &quot;de Finibus Bonorum et Malorum&quot; by Cicero are also
        reproduced in their exact original form, accompanied by English versions
        from the 1914 translation by H. Rackham
      </Text>
      <Text as="p">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and
        Evil) by Cicero, written in 45 BC. This book is a treatise on the theory
        of ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in
        section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s
        is reproduced below for those interested. Sections 1.10.32 and 1.10.33
        from &quot;de Finibus Bonorum et Malorum&quot; by Cicero are also
        reproduced in their exact original form, accompanied by English versions
        from the 1914 translation by H. Rackham
      </Text>
      <Text as="p">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and
        Evil) by Cicero, written in 45 BC. This book is a treatise on the theory
        of ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in
        section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s
        is reproduced below for those interested. Sections 1.10.32 and 1.10.33
        from &quot;de Finibus Bonorum et Malorum&quot; by Cicero are also
        reproduced in their exact original form, accompanied by English versions
        from the 1914 translation by H. Rackham
      </Text>
      <Text as="p">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and
        Evil) by Cicero, written in 45 BC. This book is a treatise on the theory
        of ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in
        section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s
        is reproduced below for those interested. Sections 1.10.32 and 1.10.33
        from &quot;de Finibus Bonorum et Malorum&quot; by Cicero are also
        reproduced in their exact original form, accompanied by English versions
        from the 1914 translation by H. Rackham
      </Text>
      <Text as="p">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and
        Evil) by Cicero, written in 45 BC. This book is a treatise on the theory
        of ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in
        section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s
        is reproduced below for those interested. Sections 1.10.32 and 1.10.33
        from &quot;de Finibus Bonorum et Malorum&quot; by Cicero are also
        reproduced in their exact original form, accompanied by English versions
        from the 1914 translation by H. Rackham
      </Text>
      <Text as="p">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and
        Evil) by Cicero, written in 45 BC. This book is a treatise on the theory
        of ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in
        section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s
        is reproduced below for those interested. Sections 1.10.32 and 1.10.33
        from &quot;de Finibus Bonorum et Malorum&quot; by Cicero are also
        reproduced in their exact original form, accompanied by English versions
        from the 1914 translation by H. Rackham
      </Text>
      <Text as="p">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and
        Evil) by Cicero, written in 45 BC. This book is a treatise on the theory
        of ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in
        section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s
        is reproduced below for those interested. Sections 1.10.32 and 1.10.33
        from &quot;de Finibus Bonorum et Malorum&quot; by Cicero are also
        reproduced in their exact original form, accompanied by English versions
        from the 1914 translation by H. Rackham
      </Text>
      <Text as="p">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and
        Evil) by Cicero, written in 45 BC. This book is a treatise on the theory
        of ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in
        section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s
        is reproduced below for those interested. Sections 1.10.32 and 1.10.33
        from &quot;de Finibus Bonorum et Malorum&quot; by Cicero are also
        reproduced in their exact original form, accompanied by English versions
        from the 1914 translation by H. Rackham
      </Text>
      <Text as="p">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and
        Evil) by Cicero, written in 45 BC. This book is a treatise on the theory
        of ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in
        section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s
        is reproduced below for those interested. Sections 1.10.32 and 1.10.33
        from &quot;de Finibus Bonorum et Malorum&quot; by Cicero are also
        reproduced in their exact original form, accompanied by English versions
        from the 1914 translation by H. Rackham
      </Text>
      <Text as="p">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and
        Evil) by Cicero, written in 45 BC. This book is a treatise on the theory
        of ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in
        section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s
        is reproduced below for those interested. Sections 1.10.32 and 1.10.33
        from &quot;de Finibus Bonorum et Malorum&quot; by Cicero are also
        reproduced in their exact original form, accompanied by English versions
        from the 1914 translation by H. Rackham
      </Text>

      <Dialog {...getDialogProps()}>
        <SharedSx sx={{ px: 5, py: 4 }}>
          <Header variants="dialog-header">Header</Header>
          <Content variants="scroll">
            <Text as="p">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et
              Malorum&quot; (The Extremes of Good and Evil) by Cicero, written
              in 45 BC. This book is a treatise on the theory of ethics, very
              popular during the Renaissance. The first line of Lorem Ipsum,
              &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in
              section 1.10.32. The standard chunk of Lorem Ipsum used since the
              1500s is reproduced below for those interested. Sections 1.10.32
              and 1.10.33 from &quot;de Finibus Bonorum et Malorum&quot; by
              Cicero are also reproduced in their exact original form,
              accompanied by English versions from the 1914 translation by H.
              Rackham
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
