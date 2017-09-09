import React from 'react';

let FilterBar = ({ handleClick, handleChange }) => {
  const name = {
    all: 'SHOW_ALL',
    completed: 'SHOW_COMPLETED',
    active: 'SHOW_ACTIVE'
  }
  const linkClass = () => {
    return "sort-bar__link"
  }
  return (
    <div className="sort-bar">
      <div className="sort-bar__search">
        <input type="search" className="sort-bar__search-input" placeholder="Поиск"
          onChange={(e) => {handleChange(e)}}
        />
      </div>
      <div>
        показать:
        <span className={linkClass()}
          onClick={(e) => handleClick(name.all)}
        >Все</span>
        <span className={linkClass()}
          onClick={() => handleClick(name.completed)}
        >Выполненные</span>
        <span className={linkClass()}
          onClick={() => handleClick(name.active)}
        >Активные</span>
      </div>
    </div>
  )
}

export default FilterBar;