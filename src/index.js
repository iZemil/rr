import './styles/index.css';
import './styles/App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import Header from './components/Header';
import MainContent from './components/MainContent';
import reducer from './reducers';
import { startAddList } from './actions';


let store = createStore( reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk) );

store.dispatch(startAddList());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" component={Header}/>
        <MainContent />
    </div>
    </Router>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
