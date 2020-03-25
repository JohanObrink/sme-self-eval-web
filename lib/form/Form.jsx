import React, { useContext, useState, useEffect } from 'react'
import { Button } from '@sebgroup/react-components/dist/Button/Button'
import { actions } from './constants'
import FormStep from './FormStep'
import FormContext from './FormContext'


const Form = () => {
  const { state, dispatch } = useContext(FormContext)
  const [currentStep, setCurrentStep] = useState(<></>)
  const [navState, setNavState] = useState({ prev: false, next: false })

  useEffect(() => {
    const {steps, currentStepIndex} = state
    const newStep = steps[currentStepIndex]
    setCurrentStep(newStep)
    setNavState({
      prev: currentStepIndex > 0,
      next: currentStepIndex < steps.length - 1
    })
  }, [state.currentStepIndex])

  return (
    <>
      <FormStep {...currentStep} />
      <div className="row justify-content-end">
        <div className="col-auto prev-next-buttons">
          { navState.prev && <Button theme="secondary" onClick={() => dispatch({type: actions.PREVIOUS})}>Tidigare</Button> }
          { navState.next && <Button theme="primary" onClick={() => dispatch({type: actions.NEXT})}>Nästa</Button> }
        </div>
      </div>
    </>
  )
}

export default Form
