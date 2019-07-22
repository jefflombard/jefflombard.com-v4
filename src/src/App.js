import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// Component Imports
import { Row, Col, Hidden } from 'react-grid-system';
import Menu from './components/Menu';

// Scene Imports
import {
  Books,
  Home,
  Projects,
  Writing,
} from './scenes'; // eslint-disable-line import/named

// Setup GraphQL
const client = new ApolloClient({
  uri: '/graphql',
});

const videoLink = 'https://stupefied-curie-4eb191.netlify.com/whitelow.mp4';

class App extends Component {
  constructor(...args) {
    super(...args);
    this.videoHandler = this.videoHandler.bind(this);
  }

  videoHandler() {
    this.video.play();
  }

  render() {
    const menuItems = [
      { path: '/', label: 'home' },
      { path: '/projects/', label: 'projects' },
      { path: '/books', label: 'books' },
      { path: '/writing', label: 'writing' },
    ];

    const { videoHandler } = this;

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
                  <Route path="/" exact render={props => <Home {...props} videoHandler={videoHandler} />} />
                  <Route path="/projects/" component={Projects} />
                  <Route path="/books" component={Books} />
                  <Route path="/writing" component={Writing} />
                </div>
              </Col>
            </Row>
            <Hidden xs>
              <Route
                path="/"
                exact
                render={() => (
                  <div className="main-video-container">
                    <video
                      ref={(video) => { this.video = video; }}
                      className="main-video"
                    >
                      <source src={videoLink} type="video/mp4" />
                      <track kind="captions" />
                    </video>
                  </div>
                )}
              />
            </Hidden>
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
