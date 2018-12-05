import React from 'react'
import PropTypes from 'prop-types'
import classnames from '../_lib/classnames'
import Label from './Label'
import InputErrors from './InputErrors'

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
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  errors: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.bool
  ]).isRequired,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyPress: PropTypes.func,
  onKeyUp: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
}

NumberInput.defaultProps = {
  id: '',
  label: 'Label',
  disabled: false,
  errors: false,
  onChange: e => {},
  onKeyDown: e => {},
  onKeyPress: e => {},
  onKeyUp: e => {},
  onFocus: e => {},
  onBlur: e => {},
}

export default NumberInput
