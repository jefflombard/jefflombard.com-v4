import React from 'react';
import { Link } from "react-router-dom";
import { Hidden } from 'react-grid-system';

const Menu = props => (
  <div className="nav-menu">
    <div>
      {
        props.items.map( item => (
        <li key={item.path}>
          <Link to={item.path}>{item.label}</Link>
        </li>
        ))
      }
    </div>
    <Hidden xs>
      <div className="line"/>
      <div className="text-section">
        <p>
          <span className="bold">jeff lombard</span>
        </p>
        <p>jefflombardjr(at)</p>
        <p>gmail(dot)com</p>
      </div>
      <div className="text-section">
        <p>
          <span className="bold">location</span>
        </p>
        <p>philadelphia, pa</p>
      </div>
    </Hidden>
  </div>
);

export default Menu;
