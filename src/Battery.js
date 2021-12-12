import React from 'react';

import './Battery.css';

class Battery extends React.Component {
  render() {
    return (
      <div className="Battery">
        <span className="Battery-bar"></span>
        <span className="Battery-bar"></span>
        <span className="Battery-bar"></span>
      </div>
    );
  }
}

export default Battery;
