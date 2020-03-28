import React, { useReducer } from 'react'
import FormContext from './form/FormContext'
import { initialValue, reducer } from './form/formReducer'
import Form from './form/Form'
import { form } from './form/form'
import { ProgressBar } from '@sebgroup/react-components/dist/ProgressBar/ProgressBar'

export default () => {
  console.log('form', form)
  const [state, dispatch] = useReducer(reducer, initialValue)
  return (
    <FormContext.Provider value={{ state, dispatch }}>
      <ProgressBar
        value={(state.currentStepIndex / (form.steps.length - 1)) * 100}
      />
      <div className='container'>
        <h1>Titel på verktyget</h1>
        <Form form={form}/>
      </div>
    </FormContext.Provider>
  )
}
