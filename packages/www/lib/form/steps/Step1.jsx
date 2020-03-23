import React, { useContext, useState } from 'react'
import { Accordion } from '@sebgroup/react-components/dist/Accordion'
import { Button } from '@sebgroup/react-components/dist/Button'
import FormContext from '../FormContext'
import { actions } from '../constants'
import { LineOfBusiness, Revenue, NumberOfEmployees } from '../questions'

const Step1 = () => {
  const {dispatch} = useContext(FormContext)
  const [index, setIndex] = useState(0)
  const accordionListItems = [
    {
      content: <>
        <LineOfBusiness />
        <Button onClick={() => setIndex(1)}>Next</Button>
      </>
    }
  ]
  return (
    <Accordion activeIndex={index} list={accordionListItems} />
  )
}

/*
    <Accordion>
      <Accordion.Title>Start</Accordion.Title>
      <Accordion.Content active={index===0}>
        <LineOfBusiness />
        <Button onClick={() => setIndex(1)}>Next</Button>
      </Accordion.Content>
      <Accordion.Content active={index===1}>
        <Revenue />
        <Button onClick={() => setIndex(2)}>Next</Button>
      </Accordion.Content>
      <Accordion.Content active={index===2}>
        <NumberOfEmployees />
        <Button onClick={() => setIndex(3)}>Next</Button>
      </Accordion.Content>
      <Accordion.Content active={index===3}><Button onClick={() => dispatch({type: actions.ANSWER})}>Next</Button></Accordion.Content>
    </Accordion>
*/

export default Step1
