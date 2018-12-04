import React from 'react'
import PropTypes from 'prop-types'


// common typography
const commonClassNames = ({intent, muted}) => {
  return classnames([`mag-text-intent-${intent}`], {
    'mag-text-muted': muted
  })
}
const commonTypes = {
  intent: PropTypes.oneOf(['default', 'primary', 'success', 'warning', 'danger']),
  muted: PropTypes.bool
}
const commonDefaults = {
  intent: 'default',
  muted: false
}



// Paragraph
export const Paragraph = ({ lead, intent, muted, children }) => {
  const common = commonClassNames({ intent, muted })
  const classes = classnames([common], {
    'mag-lead-p': lead
  })
  return (
    <p className={classes}>{children}</p>
  )
}
Paragraph.propTypes = {
  ...commonTypes,
  lead: PropTypes.bool
}
Paragraph.defaultProps = {
  ...commonDefaults,
  lead: PropTypes.bool
}


// Small Text
export const Small = ({ intent, muted, children }) => {
  const common = commonClassNames({ intent, muted })
  return (
    <small className={`mag-small-text ${common}`}>{children}</small>
  )
}
Small.PropTypes = { ...commonTypes }
Small.defaultProps = { ...commonTypes }


// Heading
// - children should include the actual <h#> tag
export const Heading = ({ size, intent, muted, children }) => {
  const common = commonClassNames({ intent, muted })
  const classes = `mag-heading mag-heading--${size} ${common}`
  return (
    <div className={classes}>
      {children}
    </div>
  )
}
Heading.PropTypes = {
  ...commonTypes,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl'])
}
Heading.defaultProps = {
  ...commonTypes,
  size: 'md'
}


// Title
// - composed of heading / subheading (as children)
const Title = ({ intent, muted, children }) => {
  const common = commonClassNames({ intent, muted })
  return (
    <div className={`mag-title ${common}`}>
      {children}
    </div>
  )
}
Title.PropTypes = { ...commonTypes }
Title.defaultProps = { ...commonTypes }


// export all
export default { Paragraph, Small, Heading, Title }


