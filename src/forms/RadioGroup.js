import React from 'react'
import PropTypes from 'prop-types'
import classnames from '../_lib/classnames'

const RadioGroup = props => {
  const {
    options,
    errors,
    disabled,
  } = props

  return (
    <div className={classnames(['mag-field', 'mag-radiogroup'], {
      'mag-field-error': errors !== false,
      'mag-field-disabled': disabled,
    })}>
    
    </div>
  )
}

export default RadioGroup
