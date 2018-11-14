import React from 'react';
import { Link } from "react-router-dom";

const Menu = props => (
  <div>
    {
      props.items.map( item => (
      <li>
        <Link to={item.path}>{item.label}</Link>
      </li>
      ))
    }
  </div>
);

export default Menu;