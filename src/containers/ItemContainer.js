import { connect } from 'react-redux';
import Item from './../components/Item';
import { toggleItem } from '../actions/actions';


const mapStateToItemProps = (state) => ({
    
});

const mapDispatchToProps = (dispatch) => {
  return {
    onItemClick: (id) => { dispatch(toggleItem(id)) }
  }
};


const ItemContainer = connect(
  mapStateToItemProps,
  mapDispatchToProps
)(Item);

export default ItemContainer;