import React, { useReducer } from 'react'
import { reducer } from './form/formReducer'
import Form from './form/Form'
import { form } from './form/data'
import { ProgressBar } from '@sebgroup/react-components/dist/ProgressBar/ProgressBar'

export default () => {
  const [state, dispatch] = useReducer(reducer, { form, data: {}, currentStepIndex: 0 })
  return (
    <>
      <ProgressBar
        value={(state.currentStepIndex / (form.steps.length - 1)) * 100}
      />
      <div className='container'>
        <h1>Självtest</h1>
        <Form form={form} data={state.data} stepIndex={state.currentStepIndex} dispatch={dispatch} />
      </div>
    </>
  )
}
