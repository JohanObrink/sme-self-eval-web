import React, { useReducer } from 'react'
import FormContext from './form/FormContext'
import { initialValue, reducer } from './form/formReducer'
import Form from './form/Form'
import { ProgressBar } from '@sebgroup/react-components/dist/ProgressBar'

export default () => {
  const [state, dispatch] = useReducer(reducer, initialValue)
  return (
    <FormContext.Provider value={{ state, dispatch }}>
      <ProgressBar
        value={(state.currentStepIndex / (state.steps.length - 1)) * 100}
      />
      <div className='container'>
        <h1>Titel på verktyget</h1>
        <Form />
      </div>
    </FormContext.Provider>
  )
}
