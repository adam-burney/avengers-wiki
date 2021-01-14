/**
 * @file App component. 
 */

/* External files */
import React from 'react';
import {Router, Redirect, Route, Switch} from 'react-router-dom';
import { createBrowserHistory } from 'history';

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
    this.state = { userConnection: false};

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
      <div id='AppMain'>
        <Router history={customHistory}>
          <Navigation userConnection={this.state.userConnection} />
          <Switch>
            <Route exact path="/"> <Home /> </Route>
            <Route exact path="/catalog/:hero_name_url"> <Catalog /> </Route>
            <Route path="/login">  <LoginCredentials userConnection={this.handleConnectionChange}/>  </Route>
            <Route path="/logout"> <Logout userConnection={this.handleConnectionChange} /> </Route>
            <Redirect to="/" />
          </Switch>
        </Router>
      </div>
    );
  }
};

export default App;
