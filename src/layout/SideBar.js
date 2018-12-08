import React from 'react'
import classnames from '../_lib/classnames'



class SideBar extends React.Component {

  constructor(props) {
    super(props)
  }


  render() {
    const { fixed, children } = this.props
    
    const sidebarClasses = classnames(['mag-sidebar'])

    return (
      <aside className={sidebarClasses}>
        <div className="mag-flex-column">
          {children}
        </div>
      </aside>
    )
  }
}


SideBar.propTypes = {
}

SideBar.defaultProps = {
}

export default SideBar