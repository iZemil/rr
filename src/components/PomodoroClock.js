import React, { Component } from 'react';

export default class PomodoroClock extends Component {
  render() {
    return (
      <div className="container">
        <div className="pomodoro">
          <div className="pomodoro__session">session: 25</div>
          <div className="pomodoro__break">break: 5</div>
          <div className="pomodoro__clock">start</div>
        </div>
      </div>
    )
  }
}