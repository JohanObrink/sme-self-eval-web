import React from 'react'

export default ({ headline, text, children }) => {
  return (
    <div className="col question">
      <h3>{headline}</h3>
      { text && <p>{text}</p> }
      {children}
    </div>
  )
}
