import {
  // @ts-ignore
  jsx as emotionJsx,
  // @ts-ignore
  jsxs as emotionJsxs,
} from '@emotion/react/jsx-runtime'
import { parseProps } from './parse-props'
import * as ThemeUIJSX from './jsx-namespace'

export type { ThemeUIJSX as JSX }

export { Fragment } from 'react'

export const jsx = <P,>(
  type: React.ElementType<P>,
  props: P,
  key?: string,
): ThemeUIJSX.Element => emotionJsx(type, parseProps(props), key)

export const jsxs = <P,>(
  type: React.ElementType<P>,
  props: P,
  key?: string,
): ThemeUIJSX.Element => emotionJsxs(type, parseProps(props), key)
