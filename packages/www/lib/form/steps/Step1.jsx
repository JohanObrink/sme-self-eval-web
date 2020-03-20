import React, { useContext } from 'react'
import { Accordion } from 'semantic-ui-react'
import FormContext from '../FormContext'
import { actions } from '../constants'
import { LineOfBusiness, Revenue, NumberOfEmployees } from '../questions'

const Step1 = () => {
  const {dispatch} = useContext(FormContext)
  return (
    <Accordion>
      <Accordion.Title>Start</Accordion.Title>
      <Accordion.Content active={true}><LineOfBusiness /></Accordion.Content>
      <Accordion.Content><Revenue /></Accordion.Content>
      <Accordion.Content><NumberOfEmployees /></Accordion.Content>
      <Accordion.Content><button onClick={() => dispatch({type: actions.ANSWER})}>Next</button></Accordion.Content>
    </Accordion>
  )
}

export default Step1
