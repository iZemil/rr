import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import Example from './Example';
import Timer from '../containers/Timer';
import PomodoroClock from './PomodoroClock';
import Edit from '../containers/Edit';
import AppContainer from '../containers/AppContainer';

const MainContent = () => (
  <main>
    <Switch>
      <Route exact path="/" component={AppContainer} />
      <Route exact path="/timer" component={Timer} />
      <Route exact path="/pomodoro" component={PomodoroClock} />
      <Route path="/example" component={Example} />
      <Route path="/edit" component={Edit} />
    </Switch>
  </main>
)

export default MainContent;