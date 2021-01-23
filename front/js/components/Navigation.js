/**
 * @file Navigation component.
 */

/* External files */
 import React from 'react';
 import {Link, withRouter} from 'react-router-dom';
 import {Navbar, Nav} from 'react-bootstrap';
 import PropTypes from 'prop-types';

/* Project files */
import getLogger from '../utils/logger';
import LoginNavSwitch from './LoginNavSwitch';

const log = getLogger('Navigation');

// IMPORTANT: This needs to be called inside a router component!
const Navigation = (props) => {

  return(
  <Navbar bg="light" variant="light" sticky="top">
    <Navbar.Brand>Avengers Wiki</Navbar.Brand>
    <Navbar.Toggle aria-controls="top-navbar" />
    <Navbar.Collapse id="top-navbar">
      <Nav className="mr-auto">
        <Nav.Link href="/">Accueil</Nav.Link>
      </Nav>
      
      <Nav >
        <LoginNavSwitch userConnection={props.userConnection} />
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
};

// <Navbar.Text className="m5" > username@domain.com </Navbar.Text> <span></span>

// Prop types -----------------------
Navigation.propTypes = {
  userConnection: PropTypes.bool
};

export default withRouter(Navigation);
