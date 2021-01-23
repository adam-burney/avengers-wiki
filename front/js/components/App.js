/**
 * @file App component. 
 */

/* External files */
import React from 'react';
import {Router, Redirect, Route, Switch} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import {Container} from 'react-bootstrap';

/* Project files */
import Home from './Home';
import Navigation from './Navigation';
import LoginCredentials from './LoginCredentials';
import Logout from './Logout';
import Catalog from './Catalog';
import {userAuthentified} from  '../lib/AuthToken.js';
import getLogger from '../utils/logger';

const log = getLogger('App');
const customHistory = createBrowserHistory();

class App extends React.Component {
  constructor(props) {
    super(props);
    // At application starts, the previous connection may still be active
    // Set the state accordingly

    this.state = {userConnection: false};
/*     this.state = {
      userConnection: false,
      allAvengersData: []
    }; */

    if(userAuthentified()){
      this.state.userConnection = true;
      log.info('The user is already authentified');
    }

    this.handleConnectionChange = this.handleConnectionChange.bind(this);
  }

  handleConnectionChange(userConnection) {
    this.setState({userConnection});
  }

  render() {
    return (
      <Router history={customHistory}>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossorigin="anonymous"
        />

        <Navigation userConnection={this.state.userConnection} />

        <Container fluid id='AppMain'>
          <Switch>
            <Route exact path="/"> <Home /> </Route>
            <Route exact path="/catalog/:hero_name_url"> <Catalog /> </Route>
            <Route path="/login">  <LoginCredentials userConnection={this.handleConnectionChange}/>  </Route>
            <Route path="/logout"> <Logout userConnection={this.handleConnectionChange} /> </Route>
            <Redirect to="/" />
          </Switch>
        </Container>
      </Router>
    );
  }
};

export default App;
