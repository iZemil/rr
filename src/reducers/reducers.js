import { combineReducers } from 'redux';
import listState from './listReducer';
//import itemState from './itemReducer';
import titleReducer from './titleReducer';
import filterState from './filterReducer';
import searchText from './searchText';


const reducers = combineReducers({
  listState,
  titleReducer,
  filterState,
  searchText
})

export default reducers;