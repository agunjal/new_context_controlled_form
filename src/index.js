import React from 'react'
import { render } from 'react-dom'
import { ControlledForm, Field, FormSubmit } from './ControlledForm'
import './style.css'

const fields = {
  first: { value: '', required: true },
  last: { value: '', required: true },
  email: { value: '', required: true },
  favorite_color: { value: '', required: false }
}

const App = () => (
  <ControlledForm
    fields={fields}
    onSubmit={fields => alert(JSON.stringify(fields, null, 2))}
  >
    <Field label="First Name" name="first" />
    <Field label="last Name" name="last" />
    <Field label="Email" name="email" />
    <Field label="Favorite Color" name="favorite_color" />
    <FormSubmit>All Done!</FormSubmit>
  </ControlledForm>
)

render(<App />, document.getElementById('root'))
