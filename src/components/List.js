import React from 'react';
// import Item from './Item';
import ItemContainer from './../containers/ItemContainer';

let List = ({ listState }) => {

  return (
      <ol className="List">
        {listState.map((item, idx) => 
          <ItemContainer key={item.id} item={item} idx={idx} />
        )}
      </ol>
  )
}

export default List;

// onChange={ () => onItemClick(item.id) }