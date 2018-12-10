import React from 'react'
import PropTypes from 'prop-types'
import Fuse from 'fuse.js'
import classnames from '../_lib/classnames'
import Label from './Label'
import InputErrors from './InputErrors'

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
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  searchConfig: PropTypes.object,
  searchableValues: PropTypes.arrayOf(PropTypes.object),
  searchParams: PropTypes.arrayOf(PropTypes.string),
  fuzzyResults: PropTypes.array,
  fuzzyResultsParam: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),
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

SearchInput.defaultProps = {
  id: '',
  label: 'Label',
  disabled: false,
  placeholder: 'Search...',
  errors: false,
  searchableValues: [],
  searchParams: [],
  fuzzyResults: [],
  fuzzyResultsParam: '',
  fuzzyResults: [],
  onChange: e => {},
  onKeyDown: e => {},
  onKeyPress: e => {},
  onKeyUp: e => {},
  onFocus: e => {},
  onBlur: e => {},
}


export default SearchInput
