import React from 'react'
import PropTypes from 'prop-types'
import classnames from '../_lib/classnames'


const Button = ({ id, type, style, intent, size, disabled, loading, component, onClick, children }) => {

  const Link = component ? component.link : false
  
  const variantClasses = ['mag-button', `size-${size}`, `intent-${intent}`, `style-${style}`]
  const btnClasses = classnames(variantClasses, {
    'mag-button-loading': loading,
    'mag-button-routelink': Link !== false
  })

  return (
    <React.Fragment>
      {Link !== false &&
      <div id={id} className={btnClasses}>
        {Link}
      </div>}
      {!Link && 
      <button className={btnClasses} id={id} type={type} disabled={disabled} onClick={onClick}>
        <span className="mag-button--content">
          {children}
        </span>
      </button>}
    </React.Fragment>
  )
}


Button.propTypes = {
  id: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit']),
  style: PropTypes.oneOf(['default', 'filled', 'subtle']),
  intent: PropTypes.oneOf(['default', 'primary', 'success', 'warning', 'danger']),
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  onClick: PropTypes.func
}

Button.defaultProps = {
  id: '',
  type: 'button',
  style: 'default',
  intent: 'default',
  size: 'md',
  disabled: false,
  loading: false,
  component: false,
  onClick(e) {}
}

export default Button