/*
 * Actions: https://rajdee.gitbooks.io/redux-in-russian/content/docs/basics/Actions.html
 * 
 * =====================================================================================
 * типы действий */
export const ADD_TO_LIST = 'ADD_TO_LIST';
export const EDIT_ITEM = 'EDIT_ITEM';
export const TOGGLE_ITEM = 'TOGGLE_ITEM';
export const  CHANGE_TITLE_CHARACTERS = 'CHANGE_TITLE_CHARACTERS';
export const SET_FILTER = 'SET_FILTER';
export const SEARCH_ITEM = 'SEARCH_ITEM';


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

export const editItem = (id) => {
  return {
    type: EDIT_ITEM,
    id
  }
};

export const saveEditedItem = (title, desc) => {
  return {
    type: 'SAVE_EDITED_ITEM',
    title,
    desc
  }
}

export const toggleItem = (id) => ({
  type: TOGGLE_ITEM,
  id
});

export const filterItems = (filter) => {
  return {
    type: SET_FILTER,
    filter
  }
};

export const searchItem = (val) => {
  return {
    type: SEARCH_ITEM,
    val
  }
};