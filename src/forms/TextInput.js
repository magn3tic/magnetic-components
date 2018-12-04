import React from 'react'
import PropTypes from 'prop-types'
import Label from './Label'

const TextInput = props => {
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

  return (
    <>
      {(label.length > 0) && <Label inputId={ id } text={ label } />}
      <input
        className={ `mag-field--input` }
        id={ id }
        type='text'
        name={ name }
        value={ value }
        placeholder={ placeholder }
        disabled={ disabled }
        errors={ errors }
        onChange={ onChange }
        onKeyDown={ onKeyDown }
        onKeyPress={ onKeyPress }
        onKeyUp={ onKeyUp }
        onFocus={ onFocus }
        onBlur={ onBlur }
      />
      {(errors.length > 0) &&
      <div className="mag-field--errors">
        <ol>
          {errors.map((error, i) => 
            <li key={ i }>{error}</li>
          )}
        </ol>
      </div>}
    </>
  )
}

TextInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  errors: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyPress: PropTypes.func,
  onKeyUp: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
}

TextInput.defaultProps = {
  id: '',
  label: 'Label',
  disabled: false,
  errors: [],
  onChange: e => {},
  onKeyDown: e => {},
  onKeyPress: e => {},
  onKeyUp: e => {},
  onFocus: e => {},
  onBlur: e => {},
}

export default TextInput
