import React from 'react'




class SideBar extends React.Component {

  constructor(props) {
    super(props)
  }


  render() {
    const { fixed, children } = this.props
    
    const sidebarClasses = classnames(['mag-sidebar'])

    return (
      <aside className={sidebarClasses}>
        <div className="mag-flex-row">
          {children}
        </div>
      </header>
    )
  }
}


SideBar.propTypes = {
}

SideBar.defaultProps = {
}

export default SideBar