import {firebaseRef} from './../firebase/';

export const ADD_TO_LIST = 'ADD_TO_LIST';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const  CHANGE_TITLE_CHARACTERS = 'CHANGE_TITLE_CHARACTERS';
export const SET_FILTER = 'SET_FILTER';
export const SEARCH_ITEM = 'SEARCH_ITEM';
export const CHANGE_ITEM_INDEX = 'CHANGE_ITEM_INDEX';

export const titleChars = (num) => ({
  type: CHANGE_TITLE_CHARACTERS,
  num
});

/**
 * ADD ITEM
 */
export const addToList = (item) => {
  return {
    type: ADD_TO_LIST,
    item
  }
};

export const startAddList = () => {
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

export const startAddToList = (title, desc) => {
  return (dispatch) => {
    let item = {
      createdAt: Date.now(),
      title,
      desc,
      completed: false,
      isEdit: false,
      index: 0
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

/**
 * REMOVE ITEM
 */
export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    id
  }
};

export const removeItemDB = (id) => {
  return (dispatch) => {
    const itemRef = firebaseRef.child(`item/${id}`);
    
    return itemRef.remove().then( () => {
      dispatch(removeItem(id));
    });
  }
};

// export const startAddToList = (title, desc) => {
//   return (dispatch, getState) => {
//     let item = {
//       createdAt: Date.now(),
//       title,
//       desc,
//       completed: false,
//       isEdit: false
//     };
    
//     let itemRef = firebaseRef.child('item').push(item);
    
//     return itemRef.then(() => {
//       dispatch(addToList({
//         ...item,
//         id: itemRef.key
//       }));
//     });
//   }
// };

/**
 * WINDOW TO EDIT ITEM
 */
export const editItem = (id) => {
  return {
    type: EDIT_ITEM,
    id
  }
};

/**
 * UPDATE ITEM AFTER EDITING
 */
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

// update completed status of item
export const updateItem = (id, updates) => ({
  type: UPDATE_ITEM,
  id,
  updates
});

/**
 * TOGGLE ITEM (complete/uncomplete)
 */
export const startToggleItem = (id, completed) => {
  return (dispatch, getState) => {
    const itemRef = firebaseRef.child(`item/${id}`); // it is ES6 or child('item/' + id)
    const updates = {
        completed
    };

    return itemRef.update(updates).then( () => {
        dispatch(updateItem(id, updates));
    });
  }
}

/**
 * FILTER ITEMS
 */
export const filterItems = (filter) => {
  return {
    type: SET_FILTER,
    filter
  }
};

/**
 * CHANGING INDEX OF ITEM
 */
export const changeItemIndex = (id, val) => {
  return {
    type: CHANGE_ITEM_INDEX,
    id,
    val
  }
};

/**
 * SEARCH ITEMS by FIELD
 */
export const searchItem = (val) => {
  return {
    type: SEARCH_ITEM,
    val
  }
};