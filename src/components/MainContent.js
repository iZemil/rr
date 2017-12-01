import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import Example from './Example';
import Timer from '../containers/Timer';
import EditPage from './EditPage';
import AppContainer from '../containers/AppContainer';

const MainContent = () => (
  <main>
    <Switch>
      <Route exact path="/" component={AppContainer}/>
      <Route exact path="/таймер" component={Timer}/>
      <Route path="/пример" component={Example}/>
      <Route path="/edit-page" component={EditPage}/>
    </Switch>
  </main>
)

export default MainContent;