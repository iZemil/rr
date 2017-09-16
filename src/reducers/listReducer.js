let initialTasks = [
  {
    id: 1,
    date: 3600 * 24 * 1000,
    completed: false,
    title: 'Изучение Javascript',
    desc: 'Уверенное знание React, Redux, базовые знания языка',
    isEdit: false
  },
  {
    id: 2,
    date: 3600 * 24 * 1001,
    completed: true,
    title: 'Понимание Jquery',
    desc: 'Знание основных принципов библиотеки, применение на практике',
    isEdit: false
  }
];

function listOfVal(state = initialTasks, action) {
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
         title: action.title,
         desc: action.desc,
         isEdit: false} : item);
    default:
      return state;
  }
}

export default listOfVal;