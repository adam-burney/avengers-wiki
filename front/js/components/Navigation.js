/**
 * @file Navigation component.
 */

/* External files */
 import React from 'react';
 import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

/* Project files */
import getLogger from '../utils/logger';

const log = getLogger('Navigation');

// IMPORTANT: This needs to be called inside a router component!
const Navigation = () => {
  return (
    <div id='Navigation'>
        <Link to="/">           Accueil         </Link> <br/>
        <Link to="/login">      Se connecter        </Link> <br/>
        <Link to="/newavenger"> Ajouter un Avenger  </Link> <br/>
    </div>
  );
};

export default Navigation;
