import { combineReducers } from 'redux';
import listOfVal from './listReducer';
import titleReducer from './titleReducer';
import filterState from './filterReducer';


const reducers = combineReducers({
  listOfVal,
  titleReducer,
  filterState
})

export default reducers;