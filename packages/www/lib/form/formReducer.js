import { actions, steps } from './constants'

export const initialValue = {
  currentStep: steps.START
}

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.ANSWER:
      state = {...state, currentStep: steps.STEP2}
      break
  }
  return state
}
