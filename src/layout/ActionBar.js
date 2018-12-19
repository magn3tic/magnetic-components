import React from 'react'
import PropTypes from 'prop-types'
import classnames from '../_lib/classnames'


class ActionBar extends React.Component {

  
  
  getMessage(count) {
    const msg = `You have ${count} unsaved change`
    return count === 1 ? msg + '...' : msg + 's...'
  }
  getClassnames() {
    return classnames(['mag-actionbar'], {
      'is-showing' : this.props.showing
    })
  }

  render() {
    const { showing, unsavedChanges, children } = this.props
    return (
      <div className={this.getClassnames()}>
        <div className="mag-actionbar-liner">
          
          <div className="mag-actionbar-msg">
            <p>{this.getMessage(unsavedChanges)}</p>
          </div>
        </div>
      </div>
    )
  }
}

ActionBar.propTypes = {
  showing: PropTypes.bool,
  unsavedChanges: PropTypes.number
}

ActionBar.defaultProps = {
  showing: true,
  unsavedChanges: 1
}

export default ActionBar