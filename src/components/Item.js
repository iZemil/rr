import React from 'react';
import moment from 'moment';
import { SortableElement } from 'react-sortable-hoc';

const Item = SortableElement(({
  item, onItemClick, onItemTitleClcik, onItemCloseClick, onItemSaveClick, onItemRemove
}) => (item.isEdit ? 
    <form className='item item_edit'
      onSubmit={ (e) => {e.preventDefault(); onItemSaveClick(item.id, e.target.elements.title.value, e.target.elements.desc.value)} }
    >
      <div className='item__close' onClick={() => onItemCloseClick(item.id)}></div>
      <input type="submit" className='item__save' value="Сохранить" />
      <time key={item.id} className="item__date">{item.date}</time>
      <input type="text" className="item__title_edit"
        name="title"
        defaultValue={item.title}
      />
      <textarea className="item__desc_edit"
        name="desc"
        defaultValue={item.desc}
      ></textarea>
    </form> :
    <li className='item'
      style={{color: item.completed ? 'gray' : ''}}>
      <time key={item.id} className="item__date">{moment(item.createdAt).format("D MMM / k:mm")}</time>
      <input type="checkbox" className="checkbox" id={item.id}
        onChange={ () => onItemClick(item.id, item.completed) }
        checked={item.completed}
    />
      <label htmlFor={item.id}></label>
      <b className="item__title"
        onClick={ () => onItemTitleClcik(item.id)
      }>{item.title}</b>
      <div className="item__desc">{item.desc}</div>
      {item.completed ? 
        <div className="item__remove"
          onClick={ () => onItemRemove(item.id) }>
        </div>
        : null}
    </li>
));

export default Item;