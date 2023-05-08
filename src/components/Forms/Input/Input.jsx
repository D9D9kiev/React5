import React from 'react'
import { Field, ErrorMessage } from 'formik'
import cx from 'classnames'
import PropTypes from 'prop-types'

import './Input.scss'

const Input = ({ type, name, error, title, ...restProps }) => {
  // const hasValidation = (hasErrors) => {
  //   if (hasErrors) {
  //     return `is-invalid`
  //   } else {
  //     return `is-valid`
  //   }
  // }
  return (
    <div>
      <label htmlFor={name} className="form-label" novalidate>
        {title}
      </label>
      <Field name={name}>
        {({
          field, // { name, value, onChange, onBlur }
        }) => (
          <div>
            <input
              type={type}
              className="form-control"
              {...field}
              {...restProps}
            />
          </div>
        )}
      </Field>
      <ErrorMessage className="error-message" name={name} component={'p'} />
    </div>
  )
}
Input.defaultProps = {
  type: 'text',
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
}

export default Input
