import React from 'react';

let List = ({ listState, onItemClick }) => {

  return (
    <div>
      <ol className="List">
        {listState.map((item, idx) => 
          <li
            key={item.id}
            style={{color: item.completed ? 'gray' : ''}}
            className="List__item">
            <time key={item.id} className="List__item-date">{item.date}</time>
            <input type="checkbox" className="checkbox" id={item.id}
              onChange={ () => onItemClick(item.id) }
              checked={item.completed}
            />
            <label htmlFor={item.id}></label>
            <b>{item.title}</b>
            <p>{item.desc}</p>
          </li>
        )}
      </ol>
    </div>
  )
}

export default List;