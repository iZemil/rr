import React from 'react';
import './App.css';
import ListMaker from './../containers/ListMaker';

import { addToList } from './../actions/actions'
import { connect } from 'react-redux';

let App = ({ dispatch }) => {

    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Immersion in Javascript</h2>
          <form onSubmit={(e) => {e.preventDefault(); e.target.elements.input.value === '' ? alert('Пустое значение!') : dispatch(addToList(e.target.elements.input.value)); e.target.elements.input.value = ''}}>
            <input type="text" name="input" placeholder="Enter value ..." />
            <button type="submit">Add value</button>
          </form>
        </div>
        <div>
          <ListMaker />
        </div>
      </div>
    );
}

App = connect()(App)

export default App;
