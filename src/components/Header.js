import React from 'react';
import { Link } from 'react-router-dom';

const Header = ( { match } ) => (

  <div className="App-header">
    <div className="top-bar">
      <span className="toggle-menu">!!!</span>
      <span className="top-bar__title">{match.params.id}</span>
      <ul className="main-nav">
        <li className="main-nav__item"><Link to="/заметки">Заметки</Link></li>
        <li className="main-nav__item"><Link to="/пример">Пример</Link></li>
      </ul>
    </div>
  </div>
)

export default Header;