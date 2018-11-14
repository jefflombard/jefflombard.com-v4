import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

// Component Imports
import Menu from './components/Menu';

// Scene Imports
import { Books, Home, Projects, Writing } from './scenes';

class App extends Component {
  render() {
    const menuItems = [
      { path: "/", label: "home" },
      { path: "/projects/", label: "projects" },
      { path: "/books", label: "books"},
      { path: "/writing", label: "writing"},
    ];

    return (
      <Router>
        <div>
          <Menu items={menuItems} />
          <div class="main">
            <Route path="/" exact component={Home} />
            <Route path="/projects/" component={Projects} />
            <Route path="/books" component={Books} />
            <Route path="/writing" component={Writing} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
