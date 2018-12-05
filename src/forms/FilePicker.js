import React from 'react'
import PropTypes from 'prop-types'
import classnames from '../_lib/classnames'
import { removeDuplicates } from '../_lib/filter-helpers'

import { UploadCloud, Trash } from '../general/Icons'
import InputErrors from './InputErrors'


class FilePicker extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      files: [],
      dragging: false,
      isloading: false,
      haserrors: false
    }
    this.inputRef = React.createRef()

    this._onDragOver = this.onDragOver.bind(this)
    this._onDragEnter = this.onDragEnter.bind(this)
    this._onDragLeave = this.onDragLeave.bind(this)
    this._onDropzoneClick = this.onDropzoneClick.bind(this)
    this._onDropzoneDrop = this.onDropzoneDrop.bind(this)
    this._onInputChange = this.onInputChange.bind(this)
    this._removeFile = this.removeFile.bind(this)
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
    e.preventDefault()
    this.handleFiles(e.dataTransfer.files)
    this.setState({ dragging: false })
    e.stopPropagation()
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

    for (let i=0; i < files.length; i++) {
      this.getImagePreview(files[i], preview => {
        const newfile = [{ file: files[i], preview }]
        const merged = removeDuplicates([...this.state.files, ...newfile], 'preview')
        this.setState({ files: merged })
      })
    }
  }

  removeFile(e, index) {
    e.preventDefault()
    const files = [...this.state.files]
    files.splice(index, 1)
    this.setState({ files })
    e.stopPropagation()
  }


  componentDidUpdate(prevProps, prevState) {
    if (prevState.files.length !== this.state.files.length) {
      this.props.onFiles(this.state.files)
    }
  }


  render() {
    const { id, label, nameAttr, multiple, disabled, accept, loading, dropzone, errors } = this.props
    const { files, dragging, isloading } = this.state
    
    const fieldClasses = classnames(['mag-field', 'mag-filepicker'], {
      'mag-field-error' : errors !== false,
      'mag-field-loading' : loading || isloading,
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
            <UploadCloud />
            <p>Drop A File Here, or Click To Upload</p>
          </div>}
          {files.length > 0 &&
          <ul className="mag-filepicker-files">
            {files.map((file, i) => 
            <li key={i}>
              <figure>
                <img src={file.preview} alt={file.file.name} />
              </figure>
              <figcaption><span>{file.file.name}</span></figcaption>
              <button className="mag-filepicker-file-x" type="button" onClick={e => this._removeFile(e, i)}>
                <span className="sr-only">Remove {file.file.name}</span>
                <div className="mag-filepicker-trashicon">
                  <Trash />
                </div>
              </button>
            </li>)}
          </ul>}
        </div>}
        
        <InputErrors errors={errors} />
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
  loading: PropTypes.bool,
  dropzone: PropTypes.bool,
  errors: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
  onDrop: PropTypes.func,
  onFiles: PropTypes.func
}


FilePicker.defaultProps = {
  id: '',
  label: false,
  nameAttr: '',
  multiple: false,
  disabled: false,
  accept: 'image/*',
  loading: false,
  dropzone: false,
  errors: false,
  onDrop() {},
  onFiles(files) {}
}


export default FilePicker

