import * as React from 'react'
import { Formik, Form, FormikProps, Field, FieldProps } from 'formik'
import { useForm } from 'react-hook-form'
import {
  Label,
  Input,
  Button,
  Checkbox,
  Radio,
  Flex,
  Field as FieldInput,
  FieldError,
  Box,
} from '@kodiak-ui/primitives'

export default { title: 'Recipes/Forms' }

interface FormValues {
  firstName: string
  lastName: string
  email: string
  marketingOptin: string
  mode: string
}

function FormikForm() {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        marketingOptin: 'true',
        mode: 'dark',
      }}
      onSubmit={values => alert(JSON.stringify(values, null, 2))}
    >
      {({ values, isSubmitting, isValid }: FormikProps<FormValues>) => (
        <Form>
          <Field name="firstName">
            {({ field }: FieldProps<FormValues['firstName']>) => (
              <>
                <Label htmlFor={field.name}>First name</Label>
                <Input
                  id={field.name}
                  placeholder="Enter first name"
                  {...field}
                />
              </>
            )}
          </Field>
          <Field name="lastName">
            {({ field }: FieldProps<FormValues['lastName']>) => (
              <>
                <Label htmlFor={field.name}>Last name</Label>
                <Input
                  id={field.name}
                  placeholder="Enter last name"
                  {...field}
                />
              </>
            )}
          </Field>
          <Field name="email">
            {({ field }: FieldProps<FormValues['email']>) => (
              <>
                <Label htmlFor={field.name}>Email</Label>
                <Input
                  id={field.name}
                  type="email"
                  placeholder="Enter last name"
                  {...field}
                />
              </>
            )}
          </Field>
          <Field name="marketingOptin">
            {({ field }: FieldProps<FormValues['marketingOptin']>) => (
              <>
                <Label htmlFor={field.name} display="flex" alignItems="center">
                  <Checkbox id={field.name} {...field} />
                  Marketing Optin
                </Label>
              </>
            )}
          </Field>
          <Flex justifyContent="space-between">
            <Field name="mode">
              {({ field }: FieldProps<FormValues['mode']>) => (
                <Label htmlFor={field.name} display="flex" alignItems="center">
                  <Radio
                    {...field}
                    name={field.name}
                    value="dark"
                    checked={field.value === 'dark'}
                  />
                  Dark
                </Label>
              )}
            </Field>
            <Field name="mode">
              {({
                field: { name, value, ...field },
              }: FieldProps<FormValues['mode']>) => (
                <Label htmlFor={name} display="flex" alignItems="center">
                  <Radio
                    name={name}
                    value="deep"
                    checked={value === 'deep'}
                    {...field}
                  />
                  Deep
                </Label>
              )}
            </Field>
          </Flex>
          <Button type="submit" disabled={isSubmitting || !isValid}>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export const FormikExample = () => <FormikForm />

type ReactFormHooksFormData = {
  firstName: string
  lastName: string
  email: string
}

function ReactFormHooksForm() {
  const { register, handleSubmit, errors } = useForm<ReactFormHooksFormData>()

  function onSubmit(data: ReactFormHooksFormData) {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FieldInput
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
      </FieldInput>

      <FieldInput
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
      </FieldInput>

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
