function searchText(state = '', action) {
  switch (action.type) {
    case 'SEARCH_ITEM':
      return action.val;
    default:
      return state;
  }
}

export default searchText;