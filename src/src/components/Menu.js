import React from 'react';
import { Link } from "react-router-dom";
import './Menu.scss';

const Menu = props => (
  <div class="nav_menu">
    {
      props.items.map( item => (
      <li>
        <Link to={item.path} key={item.path}>{item.label}</Link>
      </li>
      ))
    }
  </div>
);

export default Menu;