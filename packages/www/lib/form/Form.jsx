import React, { useContext, useState, useEffect } from 'react'
import { Step1, Step2, Step3, Step4, Step5, Step6, Step7, Step8 } from './steps'
import FormContext from './FormContext'


const Form = () => {
  const { state } = useContext(FormContext)
  const steps = [<Step1 />, <Step2 />, <Step3 />, <Step4 />, <Step5 />, <Step6 />, <Step7 />, <Step8 />]
  const [currentStep, setCurrentStep] = useState(<>Hej</>)
  useEffect(() => {
    const newStep = steps[state.currentStep]
    setCurrentStep(newStep)
  }, [state.currentStep])

  return (
    <>
      <h2>Form</h2>
      { currentStep }
    </>
  )
}

export default Form
