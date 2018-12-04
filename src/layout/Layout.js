import React from 'react'
import PropTypes from 'prop-types'
import classnames from '../_lib/classnames'

const Layout = ({ className, fullscreen, children }) => {

  const layoutClasses = classnames(['mag-layout-container', className], {
    'mag-fullscreen-container': fullscreen
  })

  return (
    <div className={layoutClasses}>
      {children}
    </div>
  )
}


Layout.propTypes = {
  className: PropTypes.string,
  fullscreen: PropTypes.bool
}

Layout.defaultProps = {
  className: '',
  fullscreen: false
}

export default Layout
