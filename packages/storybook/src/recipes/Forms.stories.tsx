import * as React from 'react'
import { useForm } from 'react-hook-form'
import {
  Label,
  Button,
  Checkbox,
  Radio,
  Flex,
  Field,
  FieldError,
  Box,
} from '@kodiak-ui/primitives'

export default { title: 'Recipes/Forms' }

type ReactFormHooksFormData = {
  firstName: string
  lastName: string
  email: string
  mode: string
  marketing: boolean
}

function ReactFormHooksForm() {
  const { register, handleSubmit, errors } = useForm<ReactFormHooksFormData>()

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

      <Flex mb={4}>
        <Label display="flex" alignItems="center" mr={4}>
          <Radio name="mode" value="Dark" ref={register} />
          Dark
        </Label>
        <Label display="flex" alignItems="center" mr={4}>
          <Radio name="mode" value="Light" ref={register} />
          Light
        </Label>
      </Flex>

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

      <Button type="submit">Submit</Button>
    </form>
  )
}

export const ReactFormHooks = () => <ReactFormHooksForm />
