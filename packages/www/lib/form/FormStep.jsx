import React, { useContext } from 'react'
import FormContext from './FormContext'

export default ({ headline, questions }) => {
  const {dispatch} = useContext(FormContext)
  
  return (
    <>
    <div className="row">
      <div className="col">
      <h3>{ headline }</h3>
      </div>
    </div>
        { questions }
    </>
  )
}
