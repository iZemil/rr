import { connect } from 'react-redux';
import { startAddToList, titleChars } from '../store/actions';
import EditPage from './../components/EditPage';

const mapStateToAppProps = (state) => ({
  titleState: state.titleReducer
});

const mapDispatchToProps = (dispatch) => {
  return {
    addItemSubmit: (e) => {
      e.preventDefault();
      let titleVal = e.target.elements.input.value.trim(),
        textVal = e.target.elements.textarea.value.trim();
      
      if(titleVal === '' || titleVal.length > 50 ) {
        alert('Ошибка заполнения');
      } else {
        e.target.elements.input.value = '';
        e.target.elements.textarea.value = '';
        dispatch(startAddToList(titleVal, textVal));
        dispatch(titleChars(0));
      }
    },
    handleChangeTitle: (e) => {
      dispatch(titleChars(e.target.value.length));
    }
  }
};

const Edit = connect(
  mapStateToAppProps,
  mapDispatchToProps
)(EditPage);

export default Edit;