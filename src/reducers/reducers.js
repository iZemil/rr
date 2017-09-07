import { combineReducers } from 'redux';

let initialTasks = [
  {
    id: 1,
    date: 3600 * 24 * 1000,
    completed: false,
    title: 'Изучение Javascript',
    desc: 'Уверенное знание React, Redux, базовые знания языка'
  },
  {
    id: 2,
    date: 3600 * 24 * 1000,
    completed: true,
    title: 'Понимание Jquery',
    desc: 'Знание основных принципов библиотеки, применение на практике'
  }
];

function listOfVal(state = initialTasks, action) {
  switch (action.type) {
    case 'ADD_TO_LIST':
      return [
        ...state,
        {
          id: action.id,
          date: action.date,
          completed: false,
          title: action.title,
          desc: action.desc
        }
      ]
    case 'TOGGLE_ITEM':
      return state.map(item =>
        (item.id === action.id) ? {...item, completed: !item.completed} : item
      )
    default:
      return state
  }
}

function titleReducer(state = 0, action) {
  switch (action.type) {
    case 'CHANGE_TITLE_CHARACTERS':
      return action.num
    default:
      return state
  }
}

const reducers = combineReducers({
  listOfVal,
  titleReducer
})

export default reducers;