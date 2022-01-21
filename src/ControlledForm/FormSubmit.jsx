import React from 'react'
import PropTypes from 'prop-types'
import FormContext from './FormContext'

const btnStyle = {
  backgroundColor: 'darkolivegreen',
  border: 'none',
  color: 'white',
  fontSize: '1rem',
  padding: '8px 16px'
}

const disabledBtnStyle = {
  ...btnStyle,
  opacity: '0.5'
}

const FormSubmit = ({ children }, { isComplete }) => (
  <FormContext.Consumer>
    {({ isComplete }) => {
      return (
        <button
          style={isComplete ? btnStyle : disabledBtnStyle}
          disabled={!isComplete}
        >
          {children || 'Submit'}
        </button>
      )
    }}
  </FormContext.Consumer>
)

FormSubmit.propTypes = {
  children: PropTypes.any
}

export default FormSubmit
