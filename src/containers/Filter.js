import { connect } from 'react-redux';
import { filterItems, searchItem } from './../actions';
import FilterBar from './../components/FilterBar';

const mapStateToProps = (state) => {
  return { filterState: state.filterState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: (filterName) => { dispatch(filterItems(filterName)); },
    handleChange: (e) => { dispatch(searchItem(e.target.value)) }
  }
};

const Filter = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterBar);

export default Filter;