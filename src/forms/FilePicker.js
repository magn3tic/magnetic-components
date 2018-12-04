import React from 'react'
import PropTypes from 'prop-types'

import classnames from '../_lib/classnames'


class FilePicker extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      files: []
    }
  }

  render() {
    const { id, label, nameAttr, multiple, disabled, accept, dropzone, errors } = this.this.props
    
    const fieldClasses = classnames(['mag-field', 'mag-filepicker'], {
      'mag-field-error' : errors !== false,
      'mag-field-disabled' : disabled
    })

    return (
      <div className={fieldClasses}>

        <div className="mag-field--input">
          {label &&
          <label htmlFor={id} className="mag-field--input">{label}</label>}
          <input type="file" accept={accept} multiple={multiple} />
        </div>

        <div className="mag-filepicker-dropzone">

        </div>
        
        {(Array.isArray(errors) && errors.length > 0) &&
        <div className="mag-field--errors">
          <ul>
            {errors.map((error, item) => {
            <li>{error}</li>
            })}
          </ul>
        </div>}
        
      </div>
    )
  }
}



FilePicker.propTypes = {
  id: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  nameAttr: PropTypes.string,
  multiple: PropTypes.bool,
  disabled: PropTypes.bool,
  accept: PropTypes.string,
  dropzone: PropTypes.bool,
  errors: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
  onFilesUpdated: PropTypes.func
}


FilePicker.defaultProps = {
  id: '',
  label: false,
  nameAttr: '',
  multiple: false,
  disabled: false,
  accept: 'image/*',
  dropzone: false,
  errors: false,
  onFilesUpdated(files) {}
}








