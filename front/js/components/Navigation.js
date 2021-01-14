/**
 * @file Navigation component.
 */

/* External files */
 import React from 'react';
 import {Link, withRouter} from 'react-router-dom';
 import PropTypes from 'prop-types';

/* Project files */
import getLogger from '../utils/logger';
import LoginNavSwitch from './LoginNavSwitch';

const log = getLogger('Navigation');

// IMPORTANT: This needs to be called inside a router component!
const Navigation = (props) => {

  return(
    <div id='Navigation'>
      <nav>
        <Link to="/">Accueil</Link> <span> </span>
        <LoginNavSwitch userConnection={props.userConnection} />
      </nav>
    </div>
  );
};

// Prop types -----------------------
Navigation.propTypes = {
  userConnection: PropTypes.bool
};

export default withRouter(Navigation);
