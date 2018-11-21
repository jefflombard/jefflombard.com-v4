import React from 'react';
import { Link } from 'react-router-dom';
import { Hidden } from 'react-grid-system';

const Menu = ({ items }) => (
  <div className="nav-menu">
    <div>
      {
        items.map(item => (
          <li key={item.path}>
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))
      }
    </div>
    <Hidden xs>
      <div className="line" />
      <div className="text-section">
        <p className="bold">jeff lombard</p>
        <p className="small thin">test</p>
      </div>
      <div className="text-section">
        <p className="bold">contact</p>
        <p className="small thin">jefflombardjr(at)</p>
        <p className="small thin">gmail(dot)com</p>
      </div>
      <div className="text-section">
        <p className="bold">location</p>
        <p className="small thin">philadelphia, pa</p>
      </div>
    </Hidden>
  </div>
);

export default Menu;
