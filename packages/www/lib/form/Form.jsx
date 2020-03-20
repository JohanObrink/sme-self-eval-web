import React, { useContext, useEffect, useState } from 'react'
import { Step1, Step2 } from './steps'
import FormContext from './FormContext'
import { steps } from './constants'

const Form = () => {
  const { state } = useContext(FormContext)
  const getCurrentStep = () => {
    switch (state.currentStep) {
      case steps.START:
        return <Step1 />
      case steps.STEP2:
        return <Step2 />
      default:
        return <></>
    }
  }

  return (
    <>
      <h2>Form</h2>
      { getCurrentStep() }
    </>
  )
}

export default Form
