import React from 'react'
import PropTypes from 'prop-types'
import classnames from '../_lib/classnames'
import Label from './Label'
import InputErrors from './InputErrors'
import { basicInputProps, defaultInputPropTypes } from './basicProps'

const ColorInput = props => {
  const {
    id,
    label,
    name,
    value,
    disabled,
    errors,
    onChange,
    onFocus,
    onBlur,
  } = props

  const cns = classnames(['mag-field', 'mag-colorinput'], {
    'mag-field-error': errors !== false,
    'mag-field-disabled': disabled,
  })

  return (
    <div className={ cns }>
      <Label inputId={ id } text={ label } />
      <input
        type="color"
        id={ id }
        name={ name }
        value={ value }
        disabled={ disabled }
        onChange={ e => onChange(e.target.value, e) }
        onFocus={ onFocus }
        onBlur={ onBlur }
      />
      <InputErrors errors={ errors } />
    </div>
  )
}

ColorInput.propTypes = {
  ...basicInputProps,
}

ColorInput.defaultProps = {
  ...defaultInputPropTypes,
}

export default ColorInput
