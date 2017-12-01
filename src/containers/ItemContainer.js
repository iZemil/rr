import { connect } from 'react-redux';
import Item from './../components/Item';
import { startToggleItem, editItem, startSaveEditedItem, removeItemDB } from '../store/actions';

const mapDispatchToProps = (dispatch) => {
  return {
    onItemClick: (id, completed) => { dispatch(startToggleItem(id, !completed)) },
    onItemTitleClcik: (id) => { dispatch(editItem(id)) },
    onItemCloseClick: (id) => { dispatch(editItem(id)) },
    onItemSaveClick: (id, title, desc) => { dispatch(startSaveEditedItem(id, title, desc)) },
    onItemRemove: (id) => { dispatch(removeItemDB(id)) }
  }
};

// const mapStateToProps = (state) => ({});

const ItemContainer = connect(
  null,
  mapDispatchToProps
)(Item);

export default ItemContainer;