import React from 'react';
import './App.css';
import ListMaker from './../containers/ListMaker';

import { addToList, titleChars } from './../actions/actions'
import { connect } from 'react-redux';


const mapStateToAppProps = (state) => ({
  titleCharacters: state.titleReducer
});

class App extends React.Component {

  render () {
    let {dispatch, titleCharacters} = this.props;

    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Immersion in Javascript</h2>
          <form
            className="task-form"
            autoComplete="off"
            onSubmit={(e) => {
              e.preventDefault();
              (titleCharacters === 0 || titleCharacters > 70) ? alert('Ошибка заполнения') : dispatch(addToList(e.target.elements.input.value, e.target.elements.textarea.value));
              e.target.elements.input.value = '';
              e.target.elements.textarea.value = '';
              dispatch(titleChars(0));
            }}>
            <div className="input-title">
              <input type="text" name="input" placeholder="Введите тезис ..."
                onChange={(e) => {
                  dispatch(titleChars(e.target.value.length));
                }}/>
              <div className="input-title__chars"
                style={{color: titleCharacters > 70 ? 'red' : 'gray'}}
                >
                {titleCharacters} / 70</div>
            </div>
            <textarea placeholder="Введите описание ..." name="textarea"></textarea>
            <button type="submit">Добавить</button>
          </form>
        </div>
        <div>
          <ListMaker />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToAppProps)(App);
