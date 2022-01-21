import React from 'react'
import PropTypes from 'prop-types'
import TextField from './TextField'
import FormContext from './FormContext'

const Field = ({ name, ...rest }) => (
  <FormContext.Consumer>
    {({ fields, handlers }) => {
      return <TextField name={name} {...rest} {...fields[name]} {...handlers} />
    }}
  </FormContext.Consumer>
)

Field.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string
}

export default Field
