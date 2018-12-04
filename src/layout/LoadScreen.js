import React from 'react'
import PropTypes from 'prop-types'
import classnames from '../_lib/classnames'

import { Paragrph } from '../general/Typography'


const LoadScreen = ({ showing, message }) => {

  return (
    <div className="mag-loadscreen">
      <div className="mag-vertical-center">

        <div className="mag-loadscreen--content">
          {message &&
          <Paragraph>{message}</Paragraph>}
        </div>

      </div>
    </div>
  )
}


LoadScreen.propTypes = {
  className: PropTypes.string 
}

LoadScreen.defaultProps = {
  className: ''
}

export default LoadScreen