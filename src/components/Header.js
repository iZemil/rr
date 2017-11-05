import React from 'react';
import { Link } from 'react-router-dom';

const Header = ( { location } ) => (

  <div className="App-header">
    <div className="top-bar">
      <span className="toggle-menu">l!!</span>
      <span className="top-bar__title">{ location.pathname.replace(/\//, '') }</span>
      <ul className="main-nav">
        <li className="main-nav__item"><Link to="/заметки">Заметки</Link></li>
        <li className="main-nav__item"><Link to="/таймер">Таймер</Link></li>
        <li className="main-nav__item"><Link to="/пример">Пример</Link></li>
      </ul>
    </div>
  </div>
)

export default Header;