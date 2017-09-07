import React from 'react';
import './../styles/App.css';
import ListMaker from './../containers/ListMaker';

export default class App extends React.Component {

  render () {
    const { addItemSubmit, handleChangeTitle, titleState} = this.props;

    return (
      <div className="App">
        <div className="App-header">
          <div className="top-bar">
            <span className="toggle-menu">!!!</span>
            <span className="top-bar__title">Заметки</span>
            <div className="top-bar__search">
              Поиск: <input type="search" className="top-bar__search-input" />
            </div>
          </div>
          <form
            className="task-form" autoComplete="off"
            onSubmit={(e) => addItemSubmit(e)}
          >
            <div className="input-title">
              <input type="text" name="input" placeholder="Введите тезис ..."
                onChange={(e) => handleChangeTitle(e)}
              />
              <div className="input-title__chars" style={{color: titleState > 70 ? 'red' : 'gray'}} >
                {titleState} / 70
              </div>
            </div>
            <textarea placeholder="Введите описание ..." name="textarea"></textarea>
            <button type="submit">Добавить</button>
          </form>
          <div className="sort-bar">
            показать:
            <span className="sort-bar__link sort-bar__link_active">Все</span>
            <span className="sort-bar__link">Выполненные</span>
            <span className="sort-bar__link">Активные</span>
          </div>
        </div>
        <div>
          <ListMaker />
        </div>
      </div>
    );
  }
}