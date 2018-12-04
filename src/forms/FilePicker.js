import React from 'react'
import PropTypes from 'prop-types'

import classnames from '../_lib/classnames'


class FilePicker extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      files: [],
      loading: false,
      dragging: false
    }
    this.inputRef = React.createRef()

    this._onDragOver = this.onDragOver.bind(this)
    this._onDragEnter = this.onDragEnter.bind(this)
    this._onDragLeave = this.onDragLeave.bind(this)
    this._onDropzoneClick = this.onDropzoneClick.bind(this)
  }

  onDragEnter(e) {
    e.preventDefault()
    this.setState({ dragging: true })
  }
  onDragLeave(e) {
    e.preventDefault()
    this.setState({ dragging: false })
  }
  onDragOver(e) {
    e.preventDefault()
    e.stopPropagation()
  }

  onDropzoneClick(e) {
    e.preventDefault()
    this.inputRef.current.click()
  }

  render() {
    const { id, label, nameAttr, multiple, disabled, accept, dropzone, errors } = this.props
    const { files, dragging, loading } = this.state
    
    const fieldClasses = classnames(['mag-field', 'mag-filepicker'], {
      'mag-field-error' : errors !== false,
      'mag-field-disabled' : disabled,
      'mag-filepicker-dropzone' : dropzone
    })
    const dropzoneClasses = classnames(['mag-dropzone'], {
      'mag-dropzone-dragging': dragging,
      'mag-dropzone-hasfiles': files.length > 0
    })

    return (
      <div className={fieldClasses}>

        <div className="mag-field--input">
          {label &&
          <label htmlFor={id}>
            <span>{label}</span>
          </label>}

          {files.length > 0 &&
          <span>{files.length} Files Selected...</span>}
          {files.length === 0 &&
          <span>No Files Chosen...</span>}

          <input type="file" id={id} ref={this.inputRef} accept={accept} multiple={multiple} />
        </div>
        
        {dropzone &&
        <div className={dropzoneClasses} onDragOver={e => this._onDragOver} onClick={e => this._onDropzoneClick(e)}
         onDragEnter={e => this._onDragEnter(e)} onDragLeave={(e) => this._onDragLeave(e)}>
          
          {files.length === 0 &&
          <div className="mag-dropzone-empty">
            <p>Drop A File Here, or Click To Upload</p>
          </div>}

          {files.length > 0 &&
          <ul>
          </ul>}
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


export default FilePicker






