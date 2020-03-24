import { actions } from './constants'

export const initialValue = {
  currentStep: 0
}

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.ANSWER:
      const currentStep = state.currentStep + 1
      state = {...state, currentStep}
      break
  }
  return state
}
