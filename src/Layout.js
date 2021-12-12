import React from 'react';

import './Layout.css';
import Signal from './Signal';
import Battery from './Battery';

function Layout({ children, navigation }) {
  return (
    <div className="Layout">
      <div className="Layout-navigation">{navigation}</div>
      <div className="Layout-content">
        <div className="Layout-header">
          <Signal />
          <Battery />
        </div>
        {children}
      </div>
    </div>
  );
}

export default Layout;
