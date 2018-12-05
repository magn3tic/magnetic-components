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
    this._onDropzoneDrop = this.onDropzoneDrop.bind(this)
    this._onInputChange = this.onInputChange.bind(this)
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

  onDropzoneDrop(e) {
    e.stopPropagation()
    e.preventDefault()
    this.handleFiles(e.dataTransfer.files)
  }

  onInputChange(e) {
    e.preventDefault()
    this.handleFiles(e.target.files)
  }
  

  getImagePreview(file, callback) {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => callback(reader.result)
  }

  handleFiles(files) {
    if (files.length === 0) return
    this.setState({ loading: true })

    console.log('Files: ', files)

    for (let i=0; i < files.length; i++) {
      this.getImagePreview(files[i], preview => {
        const newfile = [{ file: files[i], preview }]
        this.setState({
          files: [...this.state.files, ...newfile]
        })
      })
    }
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

          <input type="file" id={id} ref={this.inputRef} accept={accept} multiple={multiple} 
           onChange={e => this._onInputChange(e)} />
        </div>
        
        {dropzone &&
        <div className={dropzoneClasses} onDragOver={e => this._onDragOver(e)} onClick={(e) => this._onDropzoneClick(e)}
         onDragEnter={e => this._onDragEnter(e)} onDragLeave={(e) => this._onDragLeave(e)} onDrop={(e) => this._onDropzoneDrop(e)}>
          
          {files.length === 0 &&
          <div className="mag-dropzone-empty">
            <p>Drop A File Here, or Click To Upload</p>
          </div>}

          {files.length > 0 &&
          <ul className="mag-filepicker-files">
            {files.map((file, i) => 
            <li key={i}>
              <figure>
                <img src={file.preview} alt={file.file.title} />
              </figure>
            </li>)}
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
  // maybe, instead of below -- errors: PropTypes.oneOfType([ PropTypes.arrayOf(PropTypes.string), PropTypes.bool ])
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






