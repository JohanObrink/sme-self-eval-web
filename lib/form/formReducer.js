import { actions } from './constants'

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.ANSWER:
      state = {
        ...state,
        data: {
          ...state.data,
          [action.payload.path]: action.payload.value,
        },
      }
      break
    case actions.NEXT:
      state = { ...state, currentStepIndex: state.currentStepIndex + 1 }
      break
    case actions.PREVIOUS:
      state = { ...state, currentStepIndex: state.currentStepIndex - 1 }
      break
    case actions.FINISH:
      state = { ...state, id: action.payload }
      break
  }
  return state
}
