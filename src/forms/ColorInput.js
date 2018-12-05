import React from 'react'
import PropTypes from 'prop-types'
import classnames from '../_lib/classnames'
import Label from './Label'
import InputErrors from './InputErrors'

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
        onChange={ onChange }
        onFocus={ onFocus }
        onBlur={ onBlur }
      />
      <InputErrors errors={ errors } />
    </div>
  )
}

ColorInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  errors: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.bool
  ]).isRequired,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
}

ColorInput.defaultProps = {
  id: '',
  label: 'Label',
  disabled: false,
  errors: false,
  onChange: e => {},
  onFocus: e => {},
  onBlur: e => {},
}

export default ColorInput
