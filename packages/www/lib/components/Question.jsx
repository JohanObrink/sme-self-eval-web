import React from 'react'

export default ({ headline, text, children }) => {
  return (
    <div>
      <h3>{headline}</h3>
      <p>{text}</p>
      {children}
    </div>
  )
}
