/**
 * @file Login component.
 */

/* External files */
import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

/* Project files */
import UiParams from '../lib/UiParams';
import {clearToken} from  '../lib/AuthToken.js';
import getLogger from '../utils/logger';

const log = getLogger('Logout');

class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.ui = new UiParams;

    clearToken();
    props.userConnection(false);
    log.info('User logged out.');
  }

  componentDidMount() {
    document.title = `${this.ui.mainTitle}: Déconnexion...`;
  }

  render() {
    return(
      <div>
        <p>Vous êtes maintenant déconnecté</p>
        <Link to="/">{"Retour à la page d'accueil"}</Link>
      </div>

    );
  }
}

Logout.propTypes = {
  userConnection: PropTypes.func
};

export default Logout;

