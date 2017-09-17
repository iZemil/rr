import { connect } from 'react-redux';
import List from './../components/List';

// возможно необходимо разделить данную структуру и перенести часть в редьюсер
const getItems = (list, filterState, searcText) => {
  function doSort(a, b) {
    if (a.completed > b.completed ) { return 1 }
    if (a.completed < b.completed ) { return -1 }
    // sort by creating date
    if ( a.completed === b.completed ) {
      if ( a.createdAt < b.createdAt ) { return 1 }
      if ( a.createdAt > b.createdAt ) { return -1 }
    }
  }
  // search by entered value in titles/descs
  function doSearch(item) {
    if (item.title.toLowerCase().indexOf(searcText.toLowerCase().trim()) + 1 ||
      item.desc.toLowerCase().indexOf(searcText.toLowerCase().trim()) + 1) {
      return true
    } else {
       return false
    }
  }
  switch (filterState) {
    case 'SHOW_ALL':
      return list.sort(doSort).filter(doSearch);
    case 'SHOW_COMPLETED':
      return list.filter(t => t.completed).filter(doSearch);
    case 'SHOW_ACTIVE':
      return list.filter(t => !t.completed).filter(doSearch);
    default:
      return list
  }
}

const mapStateToListProps = (state) => ({
    listState: getItems(state.listState, state.filterState, state.searchText)
});

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
};


const ListMaker = connect(
  mapStateToListProps,
  mapDispatchToProps
)(List);

export default ListMaker;