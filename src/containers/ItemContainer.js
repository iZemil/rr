import { connect } from 'react-redux';
import Item from './../components/Item';
import { toggleItem, editItem, saveEditedItem } from '../actions/actions';


const mapStateToItemProps = (state) => ({
    
});

const mapDispatchToProps = (dispatch) => {
  return {
    onItemClick: (id) => { dispatch(toggleItem(id)) },
    onItemTitleClcik: (id) => {dispatch(editItem(id))},
    onItemCloseClick: (id) => {dispatch(editItem(id))},
    onItemSaveClick: (title, desc) => {dispatch(saveEditedItem(title, desc))}
  }
};


const ItemContainer = connect(
  mapStateToItemProps,
  mapDispatchToProps
)(Item);

export default ItemContainer;