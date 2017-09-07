import { connect } from 'react-redux';
import { addToList, titleChars } from '../actions/actions';
import App from './../components/App';

const mapStateToAppProps = (state) => ({
  titleState: state.titleReducer
});

const mapDispatchToProps = (dispatch) => {
  return {
    addItemSubmit: (e) => {
      let titleVal = e.target.elements.input.value.trim(),
        textVal = e.target.elements.textarea.value.trim();
      
      e.preventDefault();
      
      if(titleVal === '' || titleVal.length > 70 ) {
        alert('Ошибка заполнения');
      } else {
        dispatch(addToList(titleVal, textVal));
        e.target.elements.input.value = '';
        e.target.elements.textarea.value = '';
        dispatch(titleChars(0));
      }
    },
    handleChangeTitle: (e) => {
      dispatch(titleChars(e.target.value.length));
    }
  }
};

const AppReducer = connect(
  mapStateToAppProps,
  mapDispatchToProps
)(App);

export default AppReducer;