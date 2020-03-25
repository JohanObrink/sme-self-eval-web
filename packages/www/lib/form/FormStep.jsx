import React, { useContext } from 'react'
import FormContext from './FormContext'

export default ({ headline, questions }) => {
  const {dispatch} = useContext(FormContext)
  
  return (
    <>
    <div className="row">
      <div className="col">
      <h2>{ headline }</h2>
      </div>
    </div>
        { questions }
    </>
  )
}
