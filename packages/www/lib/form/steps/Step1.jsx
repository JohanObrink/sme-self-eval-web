import React, { useContext } from 'react'
import { Button } from '@sebgroup/react-components/dist/Button'
import FormContext from '../FormContext'
import { actions } from '../constants'
import { LineOfBusiness, Revenue, NumberOfEmployees } from '../questions'

const Step1 = () => {
  const {dispatch} = useContext(FormContext)
  
  return (
    <>
      <LineOfBusiness />
      <Revenue />
      <NumberOfEmployees />
      <Button theme="primary" onClick={() => dispatch({type: actions.ANSWER})}>Next</Button>
    </>
  )
}

export default Step1
