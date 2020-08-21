import * as React from 'react'
import { useForm, Controller } from 'react-hook-form'
import {
  Label,
  Button,
  Checkbox,
  Radio,
  Field,
  FieldError,
  Box,
  Switch,
  Text,
} from '@kodiak-ui/primitives'
import {
  Select,
  SelectLabel,
  SelectButton,
  SelectMenu,
  SelectMenuItem,
  useSelect,
} from '@kodiak-ui/select'

export default { title: 'Recipes/Forms' }

const items = ['Layouts', 'Pre-built', 'All']
const initialSelectedItem = 'All'

function ControlledSelect({
  onSelectedItemChange,
}: {
  onSelectedItemChange: (changes?: any) => void
}) {
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect<string>({ items, initialSelectedItem, onSelectedItemChange })

  return (
    <Select>
      <SelectLabel {...getLabelProps()}>Choose a filter:</SelectLabel>
      <SelectButton isOpen={isOpen} {...getToggleButtonProps()}>
        {selectedItem || 'Filter'}
      </SelectButton>
      {isOpen && (
        <SelectMenu variant="selectMenu" {...getMenuProps()}>
          {items.map((item, index) => (
            <SelectMenuItem
              key={`${item}${index}`}
              {...getItemProps({ item, index })}
              sx={{
                bg: highlightedIndex === index ? 'primary' : 'inherit',
                color: highlightedIndex === index ? 'white' : 'inherit',
              }}
            >
              {item}
            </SelectMenuItem>
          ))}
        </SelectMenu>
      )}
    </Select>
  )
}

type ReactFormHooksFormData = {
  firstName: string
  lastName: string
  email: string
  mode: string
  marketing: boolean
  layout: string
}

export function ReactFormHooksForm() {
  const { register, setValue, handleSubmit, control, errors } = useForm<
    ReactFormHooksFormData
  >()

  function onSubmit(data: ReactFormHooksFormData) {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Field
        label="First name"
        name="firstName"
        ref={register({ required: true })}
        aria-invalid={errors?.firstName ? 'true' : 'false'}
        aria-describedby="error-first-name-required"
      >
        {errors?.firstName && (
          <FieldError id="error-first-name-required">
            Please enter a first name
          </FieldError>
        )}
      </Field>

      <Field
        label="Last name"
        name="lastName"
        ref={register({ required: true })}
        aria-invalid={errors?.lastName ? 'true' : 'false'}
        aria-describedby="error-last-name-required"
      >
        {errors?.lastName && (
          <FieldError id="error-last-name-required">
            Please enter a last name
          </FieldError>
        )}
      </Field>

      <Box sx={{ mb: 4 }}>
        <Controller
          name="layout"
          as={ControlledSelect}
          control={control}
          defaultValue=""
          onSelectedItemChange={(changes: any) =>
            setValue('layout', changes.selectedItem)
          }
        />
      </Box>

      <Box mb={4}>
        <Label display="flex" alignItems="center" mr={4}>
          <Radio name="mode" value="Dark" ref={register} />
          Dark
        </Label>
        <Label display="flex" alignItems="center" mr={4}>
          <Radio name="mode" value="Light" ref={register} />
          Light
        </Label>
      </Box>

      <Box mb={4}>
        <Label display="flex" alignItems="center">
          <Checkbox
            variant="checkbox"
            name="marketing"
            defaultChecked={true}
            ref={register}
          />
          Subscribe to marketing emails
        </Label>
      </Box>

      <Box mb={4}>
        <Label display="flex" sx={{ alignItems: 'center' }}>
          <Switch defaultChecked={true} name="updates" ref={register} />
          <Text as="span" sx={{ ml: 2 }}>
            Subscribe to updates
          </Text>
        </Label>
      </Box>

      <Button type="submit">Submit</Button>
    </form>
  )
}
