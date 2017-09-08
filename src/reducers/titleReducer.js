function titleReducer(state = 0, action) {
  switch (action.type) {
    case 'CHANGE_TITLE_CHARACTERS':
      return action.num;
    default:
      return state;
  }
}

export default titleReducer;