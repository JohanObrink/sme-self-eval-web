import { actions } from './constants'

function postFormData(){
  console.log('post stuff here to api..');

  var formDataJson = JSON.stringify({ test: 'testing!' });

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: formDataJson
    };
    fetch('https://localhost:44391/weatherforecast', requestOptions)
        .then(response => console.log(response))
        .then(data => console.log('posted..')); 
}

export const reducer = (state, action) => {
  console.log('reducer');
  console.log(action);
  console.log(state);
  switch (action.type) {
    case actions.ANSWER:
      state = {
        ...state,
        data: {
          ...state.data,
          [action.payload.path]: {
            value: action.payload.value,
            isValid: action.payload.isValid
          }
        }
      }
      break
    case actions.NEXT:
      state = { ...state, currentStepIndex: state.currentStepIndex + 1 }
      break
    case actions.PREVIOUS:
      state = { ...state, currentStepIndex: state.currentStepIndex - 1 }
      break
    case actions.FINISH:
      postFormData();
      break;
  }
  return state
}
