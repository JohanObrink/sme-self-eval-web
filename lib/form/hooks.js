import { useContext } from 'react'
import FormContext from './FormContext'
import { actions } from './constants'

export const useFormData = ({ path }) => {
  const { dispatch, state: { data } } = useContext(FormContext)
  const setFormData = (value) => {
    const isValid = true
    dispatch({ type: actions.ANSWER, payload: { path, value, isValid }})
  }

  return [data[path], setFormData]
}
