function listOfVal(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_LIST':
      return [
        ...state,
        action.item
      ];
    case 'UPDATE_ITEM':
      return state.map(item => (item.id === action.id) ? {...item, ...action.updates} : item);
    case 'EDIT_ITEM':
      return state.map(item =>
      item.id === action.id ?
        { ...item, isEdit: item.isEdit ? false : true } :
        item
    );
    case 'SAVE_EDITED_ITEM':
      return state.map(item =>
      item.isEdit ?
        { ...item,
         title: action.updates.title,
         desc: action.updates.desc,
         isEdit: false} : item);
    default:
      return state;
  }
}

export default listOfVal;