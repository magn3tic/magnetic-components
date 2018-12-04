import React from 'react'
import PropTypes from 'prop-types'


export const FlexParent = ({ className, children }) => {
  return (
    <div className="mag-flex-parent">
      {children}
    </div>
  )
}



export const FlexItem = ({ className, children }) => {
  return (
    <div className="mag-flex-item">
      {children}
    </div>
  )
}




