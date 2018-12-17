import React from 'react'
import PropTypes from 'prop-types'
import Fuse from 'fuse.js'
import classnames from '../_lib/classnames'
import Label from './Label'
import InputErrors from './InputErrors'
import { basicInputProps, defaultInputPropTypes } from './basicProps'

const SearchInput = props => {
  const {
    id,
    label,
    name,
    placeholder,
    searchConfig,
    searchableValues,
    searchParams,
    fuzzyResults,
    fuzzyResultsParam,
    disabled,
    errors,
    onChange,
    onKeyDown,
    onKeyPress,
    onKeyUp,
    onFocus,
    onBlur,
  } = props

  const fuse = new Fuse(searchableValues, {
    keys: [ ...searchParams ],
    ...searchConfig,
  })

  const findValues = ({ target }) => onChange(fuse.search(target.value))

  const cns = classnames(['mag-field', 'mag-searchinput'], {
    'mag-field-error': errors !== false,
    'mag-field-disabled': disabled,
  })

  return (
    <div className={ cns }>
      <Label inputId={ id } text={ label } />
      <input
        type="text"
        id={ id }
        placeholder={ placeholder }
        disabled={ disabled }
        onChange={ findValues }
        onKeyDown={ onKeyDown }
        onKeyPress={ onKeyPress }
        onKeyUp={ onKeyUp }
        onFocus={ onFocus }
        onBlur={ onBlur }
      />
      <div className="mag-searchinput--results">
        <ul>
          {fuzzyResults.map((result, i) =>
            <li key={ i }>{ result[ fuzzyResultsParam ] }</li>
          )}
        </ul>
      </div>
      <InputErrors errors={ errors } />
    </div>
  )
}

SearchInput.propTypes = {
  ...basicInputProps,
  searchConfig: PropTypes.object,
  searchableValues: PropTypes.arrayOf(PropTypes.object),
  searchParams: PropTypes.arrayOf(PropTypes.string),
  fuzzyResults: PropTypes.array,
  fuzzyResultsParam: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),
}

SearchInput.defaultProps = {
  ...defaultInputPropTypes,
  searchableValues: [],
  searchParams: [],
  fuzzyResults: [],
  fuzzyResultsParam: '',
  fuzzyResults: [],
}

export default SearchInput
