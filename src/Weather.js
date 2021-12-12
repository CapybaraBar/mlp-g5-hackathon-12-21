import React from 'react';

import './Weather.css';

class Weather extends React.Component {
  state = {
    icon: this.getIcon(),
  };
  getIcon() {
    const icons = ['sun', 'cloud', 'moon'];
    const icon = icons[Math.floor(Math.random() * icons.length)];
    return icon;
  }
  render() {
    return (
      <div className="Weather">
        -2&deg; <span className={'lnr lnr-' + this.state.icon}></span>
      </div>
    );
  }
}

export default Weather;
