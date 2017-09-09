import { combineReducers } from 'redux';
import listOfVal from './listReducer';
import titleReducer from './titleReducer';
import filterState from './filterReducer';
import searchText from './searchText';


const reducers = combineReducers({
  listOfVal,
  titleReducer,
  filterState,
  searchText
})

export default reducers;