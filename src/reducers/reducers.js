/*
 * Разделение reducers
 * https://rajdee.gitbooks.io/redux-in-russian/content/docs/basics/Reducers.html#разделение-редюсеров 
*/
// import { combineReducers } from 'redux';


function reducers(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_LIST':
      return [
        ...state,
        action.textVal
      ]
    
    default:
      return state
  }
}

// const reducers = combineReducers({
//   listOfVal
// })

export default reducers;