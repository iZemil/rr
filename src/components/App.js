import React from 'react';
import './../styles/App.css';
import ListMaker from './../containers/ListMaker';
import Filter from './../containers/Filter';

export default class App extends React.Component {

  render () {
    const { addItemSubmit, handleChangeTitle, titleState} = this.props;

    return (
      <div className="App">
        <div className="App-header">
          <div className="top-bar">
            <span className="toggle-menu">!!!</span>
            <span className="top-bar__title">Заметки</span>
          </div>
          <form
            className="task-form" autoComplete="off"
            onSubmit={(e) => addItemSubmit(e)}
          >
            <div className="input-title">
              <input type="text" name="input" placeholder="Введите заголовок..."
                onChange={(e) => handleChangeTitle(e)}
              />
              <div className="input-title__chars" style={{color: titleState > 50 ? 'red' : 'gray'}} >
                {titleState} / 50
              </div>
            </div>
            <textarea placeholder="Написать комментарий..." name="textarea"></textarea>
            <button type="submit">Добавить</button>
          </form>
          <Filter />
        </div>
        <div>
          <ListMaker />
        </div>
      </div>
    );
  }
}