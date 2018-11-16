import React from 'react';
import { Link } from "react-router-dom";
import { Hidden } from 'react-grid-system';

const Menu = props => (
  <div className="nav-menu">
    <div>
      {
        props.items.map( item => (
        <li>
          <Link to={item.path} key={item.path}>{item.label}</Link>
        </li>
        ))
      }
    </div>
    <Hidden xs>
      <div className="line"/>
      <div className="text-section">
        <p>
          <span className="bold">Jeff Lombard</span>
        </p>
        <p>jefflombardjr(at)</p>
        <p>gmail(dot)com</p>
      </div>
      <div className="text-section">
        <p>
          <span className="bold">Location</span>
        </p>
        <p>Phhiladelphia, PA</p>
      </div>
    </Hidden>
  </div>
);

export default Menu;
