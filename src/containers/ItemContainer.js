import { connect } from 'react-redux';
import Item from './../components/Item';
import { startToggleItem, editItem, startSaveEditedItem } from '../actions';


const mapStateToItemProps = (state) => ({
    
});

const mapDispatchToProps = (dispatch) => {
  return {
    onItemClick: (id, completed) => { dispatch(startToggleItem(id, !completed)) },
    onItemTitleClcik: (id) => {dispatch(editItem(id))},
    onItemCloseClick: (id) => {dispatch(editItem(id))},
    onItemSaveClick: (id, title, desc) => {dispatch(startSaveEditedItem(id, title, desc))}
  }
};


const ItemContainer = connect(
  mapStateToItemProps,
  mapDispatchToProps
)(Item);

export default ItemContainer;