import React from 'react'
import PropTypes from 'prop-types'
import classnames from '../_lib/classnames'

import { FlexParent, FlexItem } from './Flex'


class TopBar extends React.Component {

  constructor(props) {
    super(props)
  }


  render() {
    const { fixed, children } = this.props
    
    const topbarClasses = classnames(['mag-topbar'], {
      'mag-topbar--fixed': fixed
    })

    return (
      <header className={topbarClasses}>
        <FlexParent>
          <FlexItem>
            <h3>Magnetic Creative</h3>
          </FlexItem>

          <FlexItem>
          </FlexItem>
        </FlexParent>
      </header>
    )
  }
}


TopBar.propTypes = {
  fixed: PropTypes.bool
}

TopBar.defaultProps = {
  fixed: true
}

export default TopBar