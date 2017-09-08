import { connect } from 'react-redux';
import { filterItems } from './../actions/actions';
import FilterBar from './../components/FilterBar';

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: (filterName) => { dispatch(filterItems(filterName)); }
  }
};

const Filter = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterBar);

export default Filter;