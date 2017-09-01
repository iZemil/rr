import React from 'react';
import { connect } from 'react-redux';
// необходимые actions


// постараться разелить на контейнер и компонент
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

const mapStateToProps = (state) => {
  return {
    list: state
  }
}

List = connect(
  mapStateToProps
)(List)

export default List;