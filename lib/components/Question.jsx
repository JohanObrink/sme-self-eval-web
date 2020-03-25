import React from 'react'

export default ({ headline, text, children }) => {
  return (
    <div className="col question">
      <p className="font-weight-medium">{headline}</p>
      { text && <p>{text}</p> }
      {children}
    </div>
  )
}
