import React from 'react'
import PropTypes from 'prop-types'

const style = {
  color: 'red',
  display: 'block',
  fontSize: `${13 / 16}rem`,
  marginTop: '8px'
}

const FieldError = ({ children }) => (
  <span style={style}>{children || 'This field is required'}</span>
)

FieldError.propTypes = {
  children: PropTypes.any
}

export default FieldError
