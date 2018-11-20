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
        <p>
          <span className="bold">
            jeff lombard
          </span>
        </p>
        <p>
          <span className="thin">
            jefflombardjr(at)
          </span>
        </p>
        <p>
          <span className="thin">
            gmail(dot)com
          </span>
        </p>
      </div>
      <div className="text-section">
        <p>
          <span className="bold">
            location
          </span>
        </p>
        <p>
          <span className="thin">
            philadelphia, pa
          </span>
        </p>
      </div>
    </Hidden>
  </div>
);

export default Menu;
