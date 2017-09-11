const initialItem = {
    id: 1,
    date: 3600 * 24 * 1000,
    completed: false,
    title: 'Изучение Javascript',
    desc: 'Уверенное знание React, Redux, базовые знания языка'
  }

function itemReducer(state = initialItem, action) {
  switch (action.type) {
    case 'EDIT_ITEM':
      return state;
    default:
      return state;
  }
}

export default itemReducer;