import React from 'react'


const Spinner = ({ strokeWidth }) => {

  return (
    <div className="mag-spinner">
      <svg viewBox="0 0 100 100" height="100" width="100">
        <circle cx="50" cy="50" r="40" fill="none" strokeWidth={strokeWidth} />
        <circle cx="50" cy="50" r="40" fill="none" strokeWidth="2" />
      </svg>
    </div>
  )
}


export default Spinner