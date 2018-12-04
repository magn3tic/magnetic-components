import React from 'react'
import PropTypes from 'prop-types'
import classnames from '../_lib/classnames'


const Button = ({ id, type, intent, size, disabled, loading, component, onClick, children }) => {

  const Link = component ? component.link : false

  return (
    <div className="mag-button">
      {Link !== false && <Link {...component.props} />}
      {!Link && 
      <button id={id} type={type} disabled={disabled} onClick={onClick}>
        <span className="mag-button--content">
          {children}
        </span>
      </button>}
    </div>
  )
}


Button.propTypes = {
  id: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit']),
  intent: PropTypes.oneOf(['default', 'primary', 'warning', 'error']),
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  onClick: PropTypes.func
}

Button.defaultProps = {
  id: ''
  type: 'button',
  intent: 'default',
  size: 'md',
  disabled: false,
  loading: false,
  component: false,
  onClick(e) {}
}

export default Button