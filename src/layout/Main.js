import React from 'react'
import PropTypes from 'prop-types'


const Main = ({ children}) => {

  return (
    <main className="mag-layout-main" role="main">
      {children}
    </main>
  )
}


export default Main