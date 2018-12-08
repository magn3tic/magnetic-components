import React from 'react'
import PropTypes from 'prop-types'


const propTypes = {
  className: PropTypes.string
}
const defaultProps = {
  className: ''
}



export const FlexParent = ({ className, children }) => {
  return (
    <div className={'mag-flex-parent '+className}>
      {children}
    </div>
  )
}

FlexParent.defaultProps = {
  ...defaultProps
}


export const FlexItem = ({ className, children }) => {
  return (
    <div className={'mag-flex-item '+className}>
      {children}
    </div>
  )
}

FlexItem.defaultProps = {
  ...defaultProps
}


