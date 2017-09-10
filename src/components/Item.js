import React from 'react';

const Item = ( {item, idx, onItemClick} ) => (
    <li
      className="List__item"
      style={{color: item.completed ? 'gray' : ''}}>
      <time key={item.id} className="List__item-date">{item.date}</time>
      <input type="checkbox" className="checkbox" id={item.id}
        onChange={ () => onItemClick(item.id) }
        checked={item.completed}
      />
      <label htmlFor={item.id}></label>
      <b className="List__item-title">{item.title}</b>
      <p>{item.desc}</p>
    </li>
)

export default Item;