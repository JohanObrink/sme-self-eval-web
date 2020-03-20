import React, { useReducer } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react'
import FormContext from './form/FormContext'
import { initialValue, reducer } from './form/formReducer'
import Form from './form/Form'

export default () => {
  const [state, dispatch] = useReducer(reducer, initialValue)
  return (
    <FormContext.Provider value={{state, dispatch}}>
      <Container>
        <h1>Hello World!</h1>
        <Form />
      </Container>
    </FormContext.Provider>
  )
}
