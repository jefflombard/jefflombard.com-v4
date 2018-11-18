import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

// Component Imports
import Menu from './components/Menu';
import { Row, Col } from 'react-grid-system';

// Scene Imports
import { Books, Home, Projects, Writing } from './scenes';

// Setup GraphQL
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

class App extends Component {
  render() {
    const menuItems = [
      { path: "/", label: "home" },
      { path: "/projects/", label: "projects" },
      { path: "/books", label: "books"},
      { path: "/writing", label: "writing"},
    ];

    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="main">
            <Row>
              <Col sm={3}>
                <Menu items={menuItems} />
              </Col>
              <Col sm={9}>
                <div className="main-container">
                  <Route path="/" exact component={Home} />
                  <Route path="/projects/" component={Projects} />
                  <Route path="/books" component={Books} />
                  <Route path="/writing" component={Writing} />
                </div>
              </Col>
            </Row>
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
