import {
  AllHTMLAttributes,
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  MouseEvent,
  ReactNode,
} from 'react'
import { Placement } from '@popperjs/core'

export type PropsWithRef<T> = { ref: any } & T

export type InteractionEvent<T = HTMLInputElement> =
  | KeyboardEvent
  | MouseEvent
  | FocusEvent
  | ChangeEvent<T>

export type UseAutocompleteProps = {
  componentName?: string
  isOpen?: boolean
  isClearable?: boolean
  value?: string
  inputValue?: string
  defaultValue?: string
  openOnFocus?: boolean
  pageSize?: number
  blurOnSelect?: boolean
  clearOnBlur?: boolean
  clearOnEscape?: boolean
  closeOnSelect?: boolean
  options: string[]

  // handlers
  onCloseChange?: (event: InteractionEvent) => void
  onOpenChange?: (event: InteractionEvent) => void
  onValueChange?: (event: InteractionEvent, value: string) => void
  onInputValueChange?: (event: InteractionEvent, value: string) => void
  onHighlightedIndexChange?: (option: string) => void

  // overwritable getters
  getOptionSelected?: <T>(option: T, value: T) => boolean
  getOptionDisabled?: <T>(option: T) => boolean
}

export type AutocompleteRootProps = AllHTMLAttributes<HTMLDivElement>

export type AutocompleteLabelProps = AllHTMLAttributes<HTMLLabelElement>

export type AutocompleteInputProps = PropsWithRef<
  AllHTMLAttributes<HTMLInputElement>
>

export type AutocompleteListboxProps = PropsWithRef<
  AllHTMLAttributes<HTMLUListElement>
>

export type AutocompleteOptionProps = {
  key: number | string
  'data-option-index': number
  'data-option-selected'?: boolean
} & AllHTMLAttributes<HTMLLIElement>

export type AutocompleteInputButtonProps = {
  type?: 'reset' | 'button' | 'submit'
} & AllHTMLAttributes<HTMLButtonElement>

export type AutocompleteProps = {
  isDisabled?: boolean
  placement?: Placement
  offset?: [number, number]
  renderInput?: (props) => ReactNode
  renderOption?: (props, option, index) => ReactNode
  renderClearButton?: (props) => ReactNode
  renderPopoverButton?: (props) => ReactNode
} & UseAutocompleteProps
