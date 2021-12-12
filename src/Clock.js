import React from 'react';
import moment from 'moment';

import './Clock.css';

class Clock extends React.Component {
  render() {
    const time = moment().format('h·mm');
    return <div className="Clock">{time}</div>;
  }
}

export default Clock;
