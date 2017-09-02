import React from 'react';


let List = ({ list }) => {

  return (
    <div>
      <ul>
        {list.map((item, index) => 
          <li key={index}>{index}. {item}</li>
        )}
      </ul>
    </div>
  )
}

export default List;