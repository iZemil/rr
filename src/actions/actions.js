/*
 * Actions: https://rajdee.gitbooks.io/redux-in-russian/content/docs/basics/Actions.html
 * 
 * =====================================================================================
 * типы действий */
export const ADD_TO_LIST = 'ADD_TO_LIST';
export const TOGGLE_ITEM = 'TOGGLE_ITEM';
export const  CHANGE_TITLE_CHARACTERS = 'CHANGE_TITLE_CHARACTERS';

/* =====================================================================================
 * другие константы
 */
// export const VisibilityFilters = {
//   SHOW_ALL: 'SHOW_ALL',
//   SHOW_COMPLETED: 'SHOW_COMPLETED',
//   SHOW_ACTIVE: 'SHOW_ACTIVE'
// }


/* =====================================================================================
 * генераторы действий */
export const titleChars = (num) => ({
  type: CHANGE_TITLE_CHARACTERS,
  num
});

export const addToList = (title, desc) => {
  return {
    type: ADD_TO_LIST,
    id: Math.random(),
    date: Date.now(),
    title,
    desc
  }
};

export const toggleItem = (id) => ({
  type: TOGGLE_ITEM,
  id
});
