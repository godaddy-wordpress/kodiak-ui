import * as React from 'react'
import { KodiakUIProps, ThemeUIStyleObject } from 'kodiak-ui'
import { useCheckbox } from './useCheckbox'
import { Box } from '../Box'
import { Label } from '../Label'
import { Text } from '../Text'
import { VisuallyHidden } from '../VisuallyHidden'
import { MarkCheck } from './MarkCheck'
import { MarkIndeterminate } from './MarkIndeterminate'

export type CheckboxStyles = {
  label: ThemeUIStyleObject
  icon: ThemeUIStyleObject
}

export type CheckboxProps = {
  children?: React.ReactNode
  indeterminate?: boolean
  error?: string
  styles?: CheckboxStyles
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  renderIcon?: (props) => React.ReactNode
} & KodiakUIProps &
  React.HTMLAttributes<HTMLInputElement>

export const useCheckboxStyles = (styles: CheckboxStyles) => styles

export const Checkbox = React.forwardRef<any, CheckboxProps>(
  ({ children, styles, renderIcon: renderIconProp, base, ...props }, ref) => {
    const { getLabelProps, getInputProps, getIconProps } = useCheckbox({
      ...props,
    })

    const defaultIcon = ({ isIndeterminate, isChecked, ...props }) => (
      <Box
        as="span"
        __base={{
          bg: 'transparent',
          border: '1px solid',
          borderColor: 'muted',
          height: '16px',
          lineHeight: 1,
          position: 'relative',
          width: '16px',
          mr: 2,
          '&[data-checkbox-checked=true]': {
            bg: 'primary',
            borderColor: 'primary',
          },
          '&[data-checkbox-indeterminate=true]': {
            bg: 'primary',
            borderColor: 'primary',
          },
          '&[data-checkbox-error=true]': {
            bg: 'transparent',
            borderColor: 'danger',
          },
        }}
        base={base ? base : 'checkbox'}
        sx={styles?.icon}
        {...props}
      >
        {isChecked ? (
          <MarkCheck
            sx={{
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
              left: 0,
              right: 0,
              width: '100%',
            }}
          />
        ) : null}
        {isIndeterminate ? (
          <MarkIndeterminate
            sx={{
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
              left: 0,
              right: 0,
              width: '100%',
            }}
          />
        ) : null}
      </Box>
    )

    function renderIcon() {
      const iconProps = getIconProps()
      return renderIconProp?.(iconProps) || defaultIcon(iconProps)
    }

    return (
      <Label
        {...getLabelProps()}
        sx={{
          alignItems: 'center',
          display: 'flex',
          fontWeight: 'normal',
          lineHeight: 1,
          '&[data-checkbox-disabled=true]': {
            opacity: 0.4,
          },
          ...styles?.label,
        }}
      >
        <VisuallyHidden>
          <input ref={ref} {...getInputProps()} />
        </VisuallyHidden>
        {renderIcon()}
        {children ? <Text as="span">{children}</Text> : null}
      </Label>
    )
  },
)
