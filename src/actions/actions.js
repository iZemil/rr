/*
 * Actions: https://rajdee.gitbooks.io/redux-in-russian/content/docs/basics/Actions.html
 * 
 * =====================================================================================
 * типы действий
 */

// export const SET_TEXT = 'SET_TEXT'

/* =====================================================================================
 * другие константы
 */

// export const VisibilityFilters = {
//   SHOW_ALL: 'SHOW_ALL',
//   SHOW_COMPLETED: 'SHOW_COMPLETED',
//   SHOW_ACTIVE: 'SHOW_ACTIVE'
// }


/* =====================================================================================
 * генераторы действий
 */

export const addToList = (textVal) => ({
  type: 'ADD_TO_LIST',
  textVal
});
