import React, { useContext } from 'react'
import { Button } from '@sebgroup/react-components/dist/Button'
import FormContext from '../FormContext'
import { actions } from '../constants'
import { ShortTermLayoffs, SickLeave, Deferral } from '../questions'

const Step2 = () => {
  const {dispatch} = useContext(FormContext)
  
  return (
    <>
      <h2>Step 2</h2>
      <ShortTermLayoffs />
      <SickLeave />
      <Deferral />
      <Button theme="primary" onClick={() => dispatch({type: actions.ANSWER})}>Next</Button>
    </>
  )
}

export default Step2
