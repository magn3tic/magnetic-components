import React from 'react'
import PropTypes from 'prop-types'



const Page = ({ widgets, title, children }) => {

  return (
    <section className="mag-page-outer">
      
      <div className="mag-page">
        {title &&
        <div className="mag-page-head">
          <h1>{title}</h1>
        </div>}
        
        <div className="mag-page-body">
          {children}
        </div>
        
        <div className="mag-page-foot">
        </div>
      </div>
      
      {widgets &&
      <aside className="mag-page-widgets">
        {widgets.map((Widget, i) => 
        <Widget key={i} />
          )}
      </aside>}

    </section>
  )
}


Page.propTypes = {
  widgets: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
}

Page.defaultProps = {
  widgets: false,
  title: 'The Default Title'
}


export default Page