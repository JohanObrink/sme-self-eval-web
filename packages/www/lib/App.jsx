import React, { useReducer } from 'react'
import FormContext from './form/FormContext'
import { initialValue, reducer } from './form/formReducer'
import Form from './form/Form'
import { SelectQuestion, SliderQuestion, YesNoQuestion, InputQuestion } from './components'

export default () => {
  const [state, dispatch] = useReducer(reducer, initialValue)
  return (
    <FormContext.Provider value={{state, dispatch}}>
      <div>
        <h1>Hello World!</h1>
        <InputQuestion text="Input description" />
        <InputQuestion type="number" headline="Number Input" text="Input description" />
        <YesNoQuestion text="Yes/No description" />
        <SelectQuestion text="Select description" data={[{label: 'a', value: 'a'}, {label: 'b', value: 'b'}, {label: 'c', value: 'c'}]} />
        <SliderQuestion />
        <Form />
      </div>
    </FormContext.Provider>
  )
}
