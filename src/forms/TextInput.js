import React from 'react'
import PropTypes from 'prop-types'

const TextInput = props => {
  const {
    className,
    id,
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
      <input
        className={ `mag-textinput ${ className }` }
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
      {errors.length > 0 &&
        errors.map((err, i) =>
        <div className="mag-inputerror">
          <span key={ i }>{ err }</span>
        </div>
      )}
    </>
  )
}

TextInput.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
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
  className: '',
  id: '',
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
