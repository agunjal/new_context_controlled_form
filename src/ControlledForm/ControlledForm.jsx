import React from 'react'
import PropTypes from 'prop-types'
import FormContext from './FormContext'

const style = {
  maxWidth: '600px'
}

export default class ControlledForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.calculateState()
  }

  static propTypes = {
    children: PropTypes.any,
    fields: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired
  }

  calculateState() {
    const { fields } = this.props
    const keys = Object.keys(fields)
    let validCount = 0

    return {
      fields: keys.reduce((obj, key) => {
        const field = fields[key]

        if (!field.required || field.value) validCount += 1

        return {
          ...obj,
          [key]: {
            value: '',
            error: false,
            touched: false,
            ...field
          }
        }
      }, {}),
      isComplete: validCount === keys.length
    }
  }

  checkComplete() {
    const { fields } = this.state
    const errors = Object.values(fields).filter(
      ({ error, required, value }) => required && (error || !value)
    )
    return !errors.length
  }

  handleBlur = (e) => {
    const name = e.target.name
    this.setState(({ fields }) => {
      const field = fields[name]
      return {
        fields: {
          ...fields,
          [name]: {
            ...field,
            touched: true,
            error: field.required && !field.value
          }
        }
      }
    })
  }

  handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    this.setState(({ fields }) => {
      const field = fields[name]
      const error = field.required && !value
      return {
        fields: {
          ...fields,
          [name]: { ...fields[name], value, error }
        },
        isComplete: error ? false : this.checkComplete()
      }
    })
  }

  handleSubmit = (e) => {
    const { fields } = this.state
    e.preventDefault()
    this.props.onSubmit(
      Object.keys(fields).reduce(
        (obj, key) => ({
          ...obj,
          [key]: fields[key].value
        }),
        {}
      )
    )
  }

  render() {
    return (
      <FormContext.Provider
        value={{
          ...this.state,
          handlers: {
            onBlur: this.handleBlur,
            onChange: this.handleChange
          }
        }}
      >
        <form style={style} noValidate onSubmit={this.handleSubmit}>
          {this.props.children}
        </form>
      </FormContext.Provider>
    )
  }
}
