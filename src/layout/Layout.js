import React from 'react'
import PropTypes from 'prop-types'
import classnames from '../_lib/classnames'


const Layout = ({ className, fullscreen, sidebar, loading, children }) => {

  const layoutClasses = classnames(['mag-layout-container', className], {
    'mag-fullscreen-container': fullscreen,
    'mag-sidebar-layout': sidebar,
    'mag-app-loading': loading
  })

  return (
    <div className={layoutClasses}>
      {children}
    </div>
  )
}


Layout.propTypes = {
  className: PropTypes.string,
  fullscreen: PropTypes.bool,
  sidebar: PropTypes.bool
}

Layout.defaultProps = {
  className: '',
  fullscreen: false,
  sidebar: false
}

export default Layout
