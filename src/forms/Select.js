import React from 'react'
import PropTypes from 'prop-types'
import classnames from '../_lib/classnames'
import Label from './Label'
import InputErrors from './InputErrors'
import { basicInputProps, defaultInputPropTypes } from './basicProps'

const Select = props => {
  const {
    id,
    label,
    name,
    value,
    options,
    disabled,
    errors,
    onChange,
    onKeyDown,
    onKeyPress,
    onKeyUp,
    onFocus,
    onBlur,
  } = props

  const cns = classnames(['mag-field', 'mag-select'], {
    'mag-field-error': errors !== false,
    'mag-field-disabled': disabled,
  })

  return (
    <div className={ cns }>
      <Label inputId={ id } text={ label } />
      <select
        id={ id }
        value={ value }
        disabled={ disabled }
        onChange={ onChange }
        onKeyDown={ onKeyDown }
        onKeyPress={ onKeyPress }
        onKeyUp={ onKeyUp }
        onFocus={ onFocus }
        onBlur={ onBlur }
      >
        {options.map((option, i) => 
          <option key={ i } >
            { option }
          </option>
        )}
      </select>
      <InputErrors errors={ errors } />
    </div>
  )
}

Select.propTypes = {
  ...basicInputProps,
  options: PropTypes.arrayOf(PropTypes.string),
}

Select.defaultProps = {
  ...defaultInputPropTypes,
  options: [
    'Option 1',
    'Option 2',
    'Option 3',
  ],
}

export default Select
