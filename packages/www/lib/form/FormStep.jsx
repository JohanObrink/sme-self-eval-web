import React, { useContext } from 'react'
import FormContext from './FormContext'

export default ({ headline, questions }) => {
  const {dispatch} = useContext(FormContext)
  
  return (
    <>
      <h2>{ headline }</h2>
      { questions }
    </>
  )
}
