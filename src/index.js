import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import Header from './components/Header';
import Example from './components/Example';
import AppContainer from './containers/AppContainer';
import reducer from './reducers/reducers';
import './index.css';
import { startAddList } from './actions/actions';


let store = createStore( reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk) );

store.dispatch(startAddList());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/:id" component={Header}/>

        <Route exact path="/заметки" component={AppContainer}/>
        <Route path="/пример" component={Example}/>
        <Link to="/заметки"><div className="toApp">Перейти к приложению</div></Link>
    </div>
    </Router>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
