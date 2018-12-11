import React from 'react'
import PropTypes from 'prop-types'
import classnames from '../_lib/classnames'
import Label from './Label'
import InputErrors from './InputErrors'
import { basicInputProps, defaultInputPropTypes } from './basicProps'

const NumberInput = props => {
  const {
    id,
    label,
    name,
    value,
    placeholder,
    disabled,
    errors,
    onChange,
    onKeyDown,
    onKeyPress,
    onKeyUp,
    onFocus,
    onBlur,
  } = props

  const cns = classnames(['mag-field', 'mag-numberinput'], {
    'mag-field-error': errors !== false,
    'mag-field-disabled': disabled,
  })

  return (
    <div className={ cns }>
      <Label inputId={ id } text={ label } />
      <input
        type="number"
        id={ id }
        name={ name }
        value={ value }
        placeholder={ placeholder }
        disabled={ disabled }
        onChange={ onChange }
        onKeyDown={ onKeyDown }
        onKeyPress={ onKeyPress }
        onKeyUp={ onKeyUp }
        onFocus={ onFocus }
        onBlur={ onBlur }
      />
      <InputErrors errors={ errors } />
    </div>
  )
}

NumberInput.propTypes = {
  ...basicInputProps,
}

NumberInput.defaultProps = {
  ...defaultInputPropTypes,
}

export default NumberInput
