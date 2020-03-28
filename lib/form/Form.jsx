import React, { useContext, useState, useEffect } from 'react'
import { Button } from '@sebgroup/react-components/dist/Button/Button'
import FormStep from './FormStep'
import FormContext from './FormContext'

const getNavState = (stepIndex, steps) => ({
  prev: stepIndex > 0,
  next: stepIndex < steps.length - 1
})

const Form = ({ form, stepIndex }) => {
  const [navState, setNavState] = useState(getNavState(stepIndex, form.steps))
  const [currentStep, setCurrentStep] = useState(form.steps[stepIndex])
  useEffect(() => {
    setNavState(getNavState(stepIndex, form.steps))
    setCurrentStep(form.steps[stepIndex])
  }, [stepIndex])

  return (
    <>
      <FormStep {...currentStep} />
      <hr />
      <div className='row justify-content-end'>
        <div className='col-auto prev-next-buttons'>
          {navState.prev && <Button theme='secondary' onClick={() => dispatch({ type: actions.PREVIOUS })}>Tidigare</Button>}
          {navState.next && <Button theme='primary' onClick={() => dispatch({ type: actions.NEXT })}>Nästa</Button>}
          {!navState.next && <Button theme='primary' onClick={() => dispatch({ type: actions.FINISH })}>Slutför</Button>}
        </div>
      </div>
    </>
  )
}

export default Form
