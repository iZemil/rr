import React from 'react';

let FilterBar = ({ handleClick }) => {
  const name = {
    all: 'SHOW_ALL',
    completed: 'SHOW_COMPLETED',
    active: 'SHOW_ACTIVE'
  }
  
  return (
    <div className="sort-bar">
      <div className="top-bar__search">
        Поиск: <input type="search" className="top-bar__search-input" />
      </div>
      показать:
      <span className="sort-bar__link"

        onClick={(e) => handleClick(name.all)}
      >Все</span>
      <span className="sort-bar__link"
        onClick={() => handleClick(name.completed)}
      >Выполненные</span>
      <span className="sort-bar__link"
        onClick={() => handleClick(name.active)}
      >Активные</span>
    </div>
  )
}

export default FilterBar;