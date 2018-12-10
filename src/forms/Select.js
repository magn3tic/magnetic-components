import React from 'react'
import PropTypes from 'prop-types'
import classnames from '../_lib/classnames'

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

  const cns = classnames([], {})

  return (
    <select
      value={ value }
      onChange={ e => onChange(e) }
      disabled={ disabled }
    >
      {options.map((option, i) => 
        <option key={ i } >
          { option }
        </option>
      )}
    </select>
  )
}

Select.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  options: PropTypes.array,
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

Select.defaultProps = {
  id: '',
  label: 'Label',
  disabled: false,
  errors: false,
  options: [
    'Option 1',
    'Option 2',
    'Option 3',
  ],
  onChange: e => {},
  onKeyDown: e => {},
  onKeyPress: e => {},
  onKeyUp: e => {},
  onFocus: e => {},
  onBlur: e => {},
}

export default Select
