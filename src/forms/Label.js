import React from 'react'
import PropTypes from 'prop-types'

const Label = ({ inputId, text }) => (
  <label htmlFor={ inputId } className="mag-field--input">{ text }</label>
)

Label.propTypes = {
  inputId: PropTypes.string,
  text: PropTypes.string,
}

export default Label
