import React from 'react'
import PropTypes from 'prop-types'



const Page = ({ title, children }) => {

  return (
    <section className="mag-page">
      {children}
    </section>
  )
}


Page.propTypes = {}

Page.defaultProps = {}


export default Page