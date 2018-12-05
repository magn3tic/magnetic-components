import React from 'react'
import PropTypes from 'prop-types'
import classnames from '../_lib/classnames'
import Label from './Label'
import InputErrors from './InputErrors'

const RadioGroup = props => {
  const {
    name,
    options,
    errors,
  } = props

  const cns = classnames(['mag-field', 'mag-radiogroup'], {
    'mag-field-error': errors !== false,
  })

  return (
    <div className={ cns }>
      {options.map((option, i) => 
        <div className="mag-radiofield" key={ i }>
          <Label inputId={ option.id } text={ option.labelText } />
          <input
            type="radio"
            name={ name }
            checked={ option.checked }
            disabled={ option.disabled }
            value={ option.value }
            id={ option.id }
            onChange={ option.onChange }
          />
        </div>
      )}
      <InputErrors errors={ errors } />
    </div>
  )
}

RadioGroup.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  errors: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.bool,
  ]),
}

RadioGroup.defaultProps = {
  errors: false,
}

export default RadioGroup
