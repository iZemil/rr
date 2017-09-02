import { connect } from 'react-redux';
import List from './../components/List';

const mapStateToProps = (state) => {
  return {
    list: state
  }
}

const ListMaker = connect(
  mapStateToProps
)(List);

export default ListMaker;