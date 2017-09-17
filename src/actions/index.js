import {firebaseRef} from './../firebase/';

/*
 * Actions: https://rajdee.gitbooks.io/redux-in-russian/content/docs/basics/Actions.html
 * =====================================================================================
 * типы действий */
export const ADD_TO_LIST = 'ADD_TO_LIST';
export const EDIT_ITEM = 'EDIT_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const  CHANGE_TITLE_CHARACTERS = 'CHANGE_TITLE_CHARACTERS';
export const SET_FILTER = 'SET_FILTER';
export const SEARCH_ITEM = 'SEARCH_ITEM';




/* =====================================================================================
 * Action generators */
export const titleChars = (num) => ({
  type: CHANGE_TITLE_CHARACTERS,
  num
});

export const addToList = (item) => {
  return {
    type: ADD_TO_LIST,
    item
  }
};

export var startAddList = () => {
  return (dispatch, getState) => {
    var listRef = firebaseRef.child('item');

    return listRef.once('value').then((snapshot) => {
      var list = snapshot.val() || {};

      Object.keys(list).forEach((itemId) => {
        dispatch(addToList({
          id: itemId,
          ...list[itemId]
        }));
      });

    });
  };
};

// for firebase
export const startAddToList = (title, desc) => {
  return (dispatch, getState) => {
    let item = {
      createdAt: Date.now(),
      title,
      desc,
      completed: false,
      isEdit: false
    };
    
    let itemRef = firebaseRef.child('item').push(item);
    
    return itemRef.then(() => {
      dispatch(addToList({
        ...item,
        id: itemRef.key
      }));
    });
  }
};

export const editItem = (id) => {
  return {
    type: EDIT_ITEM,
    id
  }
};

// saving data when edited item and update data in DB
export const saveEditedItem = (updates) => {
  return {
    type: 'SAVE_EDITED_ITEM',
    updates
  }
}

export const startSaveEditedItem = (id, title, desc) => {
  return (dispatch, getState) => {
    const itemRef = firebaseRef.child(`item/${id}`);
    
    const updates = {
      title,
      desc
    };
    
    return itemRef.update(updates).then( () => {
      dispatch(saveEditedItem(updates));
    });
  }
}

// updating completed status of item
export const updateItem = (id, updates) => ({
  type: UPDATE_ITEM,
  id,
  updates
});

export const startToggleItem = (id, completed) => {
  return (dispatch, getState) => {
    // export const firebaseRef = firebase.database().ref();
    // or child('item/' + id), below it is ES6
    const itemRef = firebaseRef.child(`item/${id}`);

    const updates = {
        completed
    };

    return itemRef.update(updates).then( () => {
        dispatch(updateItem(id, updates));
    });
  }
}

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