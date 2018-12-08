import React from 'react'
import PropTypes from 'prop-types'
import classnames from '../_lib/classnames'

import { FlexParent } from './Flex'


const TopBar = ({ fixed, className, children}) => {
  
  const topbarClasses = classnames(['mag-topbar'], {
    'mag-topbar--fixed': fixed
  })

  return (
    <header id="mag-topbar" className={topbarClasses}>
      <FlexParent>
        {children}
      </FlexParent>
    </header>
  )
}


TopBar.propTypes = {
  fixed: PropTypes.bool
}

TopBar.defaultProps = {
  fixed: true
}

export default TopBar