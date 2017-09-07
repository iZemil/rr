import React from 'react';

let List = ({ listState, onItemClick }) => {

  return (
    <div>
      <ol className="List">
        {listState.map((item, idx) => 
          <li
            key={item.id}
            onClick={() => onItemClick(item.id)}
            style={{textDecoration: item.completed ? 'line-through' : 'none'}}
            className="List__item">
            <time key={item.id} className="List__item-date">{item.date}</time>
            <b>{item.title}</b>
            <p style={{display: item.completed ? 'none' : 'block'}}>{item.desc}</p>
          </li>
        )}
      </ol>
    </div>
  )
}

export default List;