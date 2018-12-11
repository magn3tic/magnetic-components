import React from 'react'
import PropTypes from 'prop-types'
import classnames from '../_lib/classnames'
import Label from './Label'
import InputErrors from './InputErrors'
import { basicInputProps, defaultInputPropTypes } from './basicProps'

const Textarea = props => {
  const {
    id,
    label,
    name,
    value,
    placeholder,
    resizable,
    disabled,
    errors,
    onChange,
    onKeyDown,
    onKeyPress,
    onKeyUp,
    onFocus,
    onBlur,
  } = props

  const cns = classnames(['mag-field', 'mag-textarea'], {
    'mag-field-error': errors !== false,
    'mag-field-disabled': disabled,
    'mag-textarea-resizable': resizable
  })

  return (
    <div className={ cns }>
      <Label inputId={ id } text={ label } />
      <textarea
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

Textarea.propTypes = {
  ...basicInputProps,
}

Textarea.defaultProps = {
  ...defaultInputPropTypes,
}

export default Textarea
