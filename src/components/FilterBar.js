import React from 'react';

let FilterBar = ({ handleClick, handleChange, filterState }) => {
  const name = {
    all: 'SHOW_ALL',
    completed: 'SHOW_COMPLETED',
    active: 'SHOW_ACTIVE'
  }

  return (
    <div className="sort-bar">
      <div className="sort-bar__search">
        <input type="search" className="sort-bar__search-input" placeholder="Поиск"
          onChange={(e) => {handleChange(e)}}
        />
      </div>
      <div className="sort-bar__options">
        <span className={ filterState === 'SHOW_ALL' ? "sort-bar__link sort-bar__link_active" : "sort-bar__link" }
          onClick={(e) => handleClick(name.all)}
        >Все</span>
        <span className={ filterState === 'SHOW_COMPLETED' ? "sort-bar__link sort-bar__link_active" : "sort-bar__link" }
          onClick={() => handleClick(name.completed)}
        >Завершенные</span>
        <span className={ filterState === 'SHOW_ACTIVE' ? "sort-bar__link sort-bar__link_active" : "sort-bar__link" }
          onClick={() => handleClick(name.active)}
        >Активные</span>
      </div>
    </div>
  )
}

export default FilterBar;