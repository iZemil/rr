import React from 'react';

const Item = ( {item, idx, onItemClick, onItemTitleClcik, onItemCloseClick, onItemSaveClick} ) => (
  item.isEdit ? 
    <form className='List__item List__item_edit'
      onSubmit={ (e) => {e.preventDefault(); onItemSaveClick(e.target.elements.title.value, e.target.elements.desc.value)} }
    >
      <div className='List__item-close' onClick={() => onItemCloseClick(item.id)}></div>
      <input type="submit" className='List__item-save' value="Сохранить" />
      <time key={item.id} className="List__item-date">{item.date}</time>
      <input type="text" className="List__item-title_edit"
        name="title"
        defaultValue={item.title}
      />
      <textarea className="List__item-desc_edit"
        name="desc"
        defaultValue={item.desc}
      ></textarea>
    </form> :
    <li
      className='List__item'
      style={{color: item.completed ? 'gray' : ''}}>
      <time key={item.id} className="List__item-date">{item.date}</time>
      <input type="checkbox" className="checkbox" id={item.id}
        onChange={ () => onItemClick(item.id, item.completed) }
        checked={item.completed}
    />
      <label htmlFor={item.id}></label>
      <b className="List__item-title"
        onClick={ () => onItemTitleClcik(item.id)
      }>{item.title}</b>
      <p>{item.desc}</p>
    </li>
)

export default Item;