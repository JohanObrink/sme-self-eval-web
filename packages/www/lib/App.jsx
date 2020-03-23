import React, { useReducer } from 'react'
import FormContext from './form/FormContext'
import { initialValue, reducer } from './form/formReducer'
import Form from './form/Form'
import { SelectQuestion, YesNoQuestion } from './components'

export default () => {
  const [state, dispatch] = useReducer(reducer, initialValue)
  return (
    <FormContext.Provider value={{state, dispatch}}>
      <div>
        <h1>Hello World!</h1>
        <YesNoQuestion text="some other text" />
        <SelectQuestion headline="Third question" text="some other text" data={['a', 'b', 'c']} />
        <Form />
      </div>
    </FormContext.Provider>
  )
}
