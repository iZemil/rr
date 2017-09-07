import { connect } from 'react-redux';
import List from './../components/List';
import { toggleItem } from '../actions/actions'

const mapStateToListProps = (state) => ({
    listState: state.listOfVal
});

const mapDispatchToProps = ({
  onItemClick: toggleItem
});

const ListMaker = connect(
  mapStateToListProps,
  mapDispatchToProps
)(List);

export default ListMaker;