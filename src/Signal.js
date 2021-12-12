import React from 'react';

import './Signal.css';

class Signal extends React.Component {
  render() {
    return (
      <div className="Signal">
        <span className="Signal-bar"></span>
        <span className="Signal-bar"></span>
        <span className="Signal-bar"></span>
        <span className="Signal-bar"></span>
      </div>
    );
  }
}

export default Signal;
