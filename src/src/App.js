import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// Component Imports
import Menu from './components/Menu';
import { Row, Col } from 'react-grid-system';

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
        <div className="main">
          <Row>
            <Col sm={3}>
              <Menu items={menuItems} />
            </Col>
            <Col sm={9}>
              <Route path="/" exact component={Home} />
              <Route path="/projects/" component={Projects} />
              <Route path="/books" component={Books} />
              <Route path="/writing" component={Writing} />
            </Col>
          </Row>
        </div>
      </Router>
    );
  }
}

export default App;
