import { SxProps } from './types'

declare module 'react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DOMAttributes<T> extends SxProps {}
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface IntrinsicAttributes extends SxProps {}
  }
}
