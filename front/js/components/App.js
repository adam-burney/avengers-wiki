/**
 * @file App component.
 */

/* External files */
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

/* Project files */
import Timestamp from './Timestamp';
import Navigation from './Navigation';
import Home from './Home';
import Login from './Login';
import NewAvenger from './NewAvenger';
import Catalog from './Catalog';

const App = () => {
  return (
    <div id='AppMain'>
      <Timestamp />
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/newavenger" component={NewAvenger}/>
          <Route path="/catalog/:hero_name_url" component={Catalog}/>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
