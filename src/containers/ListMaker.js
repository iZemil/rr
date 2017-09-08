import { connect } from 'react-redux';
import List from './../components/List';
import { toggleItem } from '../actions/actions'

const getVisibleItems = (list, filterState) => {
  switch (filterState) {
    case 'SHOW_ALL':
      return list
    case 'SHOW_COMPLETED':
      return list.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return list.filter(t => !t.completed)
    default:
      return list
  }
}
const mapStateToListProps = (state) => ({
    listState: getVisibleItems(state.listOfVal, state.filterState)
});

const mapDispatchToProps = (dispatch) => {
  return {
    onItemClick: (id) => { dispatch(toggleItem(id)) }
  }
};


const ListMaker = connect(
  mapStateToListProps,
  mapDispatchToProps
)(List);

export default ListMaker;