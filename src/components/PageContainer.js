import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import AboutMe from './AboutMe';
import MyProjects from './MyProjects';
import MyWritings from './MyWritings';
import Nav from './Nav';
import Elitism from './writings/Elitism';
import { BGPurple } from '../styles';

class PageContainer extends React.Component {

  render() {
    return (
      <BGPurple>
        <Router>
          <Nav />
          <Switch>
            <Route path="/"
            exact={true}
            render={() =>
              <Home />
            } />
            <Route path="/about-me"
            exact={true}
            render={() =>
              <AboutMe />
            } />
            <Route path="/my-projects"
            exact={true}
            render={() =>
              <MyProjects />
            } />
            <Route path="/my-writings"
            exact={true}
            render={() =>
              <MyWritings />
            } />
            <Route path="/my-writings/elitism"
            exact={true}
            render={() =>
              <Elitism />
            } />
          </Switch>
        </Router>
      </BGPurple>
    )
  }
};

export default PageContainer;