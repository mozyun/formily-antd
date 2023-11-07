import {
  FormButtonGroup,
  FormItem,
  Submit,
  Switch,
} from '@mozhou-tech/formily-adaptor-mo'
import { createForm } from '@formily/core'
import { Field, FormProvider } from '@formily/react'
import React from 'react'

const form = createForm()
const Demo: React.FC = () => {
  return (
    <FormProvider form={form}>
      <Field
        name="switch"
        title="Switch"
        decorator={[FormItem]}
        component={[Switch]}
      />
      <FormButtonGroup>
        <Submit onSubmit={console.log}>Submit</Submit>
      </FormButtonGroup>
    </FormProvider>
  )
}
export default Demo
