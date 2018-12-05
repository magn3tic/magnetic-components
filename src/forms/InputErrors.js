import React from 'react'
import classnames from '../_lib/classnames'


const InputErrors = ({ errors }) => {

  const classes = classnames(['mag-errorlist'], {
    'mag-has-errors': Array.isArray(errors) && errors.length > 0,
  })

  return (
    errors &&
    <div className={ classes }>
      <ul>
        {errors.map((error, i) => 
          <li key={ i }>{ error }</li>
        )}
      </ul>
    </div>
  )
}

export default InputErrors
