import React from 'react'
import PropTypes from 'prop-types'

const style = {
  marginBottom: '24px'
}

const FormRow = ({ children }) => <div style={style}>{children}</div>

FormRow.propTypes = {
  children: PropTypes.any
}

export default FormRow
