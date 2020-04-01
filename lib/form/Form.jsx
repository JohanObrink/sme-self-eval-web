import React, { useState, useEffect } from 'react'
import { Button } from '@sebgroup/react-components/dist/Button/Button'
import FormStep from './FormStep'
import { actions } from './constants'
import * as api from '../api'

const getNavState = (stepIndex, steps) => ({
  prev: stepIndex > 0,
  next: stepIndex < steps.length - 1
})

const Form = ({ form, stepIndex, dispatch, data }) => {
  const [navState, setNavState] = useState(getNavState(stepIndex, form.steps))
  const [currentStep, setCurrentStep] = useState(form.steps[stepIndex])
  useEffect(() => {
    setNavState(getNavState(stepIndex, form.steps))
    setCurrentStep(form.steps[stepIndex])
  }, [stepIndex])

  const save = async () => {
    const { id } = await api.create(data);
    console.log(id)
    dispatch({ type: actions.FINISH, payload: id });
  };

  return (
    <>
      <FormStep {...currentStep} dispatch={dispatch} data={data} />
      <hr />
      <div className='row justify-content-end'>
        <div className='col-auto prev-next-buttons'>
          {navState.prev && <Button theme='secondary' onClick={() => dispatch({ type: actions.PREVIOUS })}>Tidigare</Button>}
          {navState.next && <Button theme='primary' onClick={() => dispatch({ type: actions.NEXT })}>Nästa</Button>}
          {!navState.next && <Button theme='primary' onClick={() => save()}>Slutför</Button>}
        </div>
      </div>
    </>
  )
}

export default Form
