/**
 * @file Login component.
 */

/* External files */
import React from 'react';
import PropTypes from 'prop-types';

/* Project files */
import Api from '../lib/Api';
import UiParams from '../lib/UiParams';
import {setToken} from  '../lib/AuthToken.js';
import getLogger from '../utils/logger';

const log = getLogger('LoginCredentials');

class LoginCredentials extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: '', password: '', userMsg: ''};
    this.ui = new UiParams;
    this.api = new Api;

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentDidMount() {
    document.title = `${this.ui.mainTitle}: Connexion`;
  }
  
  handleInputChange(event) {
    const t = event.target;
    this.setState({[t.name]: t.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    // If email or password is empty...
    if(this.state.email === '' || this.state.password === '' ){
      return;  // GET OUT OF HERE!
    }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: this.state.email, password: this.state.password })
    };

    fetch(this.api.authenticateUrl, requestOptions)
      .then(response => response.json())
      .then(jsonData => {
        
        this.setState({userMsg: ``}); 

        if (typeof jsonData.auth_token !== 'undefined'){
          setToken(jsonData.auth_token);
          log.info('User logged in.');

          this.setState({userMsg: `Vous êtes maintenant connecté.`});
          this.props.userConnection(true);
          // *Redirect user here

        }
        else if (typeof jsonData.error !== 'undefined'){
          if (typeof jsonData.error.user_authentication !== 'undefined'){
            if(jsonData.error.user_authentication === 'invalid credentials'){
              this.setState({userMsg: `Nom d'utilisateur ou mot de passe invalide`});
        }}}
      
      })
      .catch((e) => {
        let msgStr = `Une erreur est survenue lors de la connection. `;
        msgStr    += `Vous pouvez essayer à nouveau.`;
        this.setState({userMsg: msgStr});
        log.debug('No response from API');
      });

    this.setState({password: ''});
  }

  render() {
    return (
      <div>
        <h1>Login component</h1>
        <form onSubmit={this.handleSubmit}>
          <label> Nom d&apos;utilisateur: <br/>
          <input type="text" name="email" value={this.state.email} onChange={this.handleInputChange} />
          </label> <br/><br/>
          <label> Mot de passe: <br/>
          <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
          </label> <br/><br/>
          <input type="submit" value="Se connecter" />
        </form>
        <p> {this.state.userMsg} </p>
      </div>
    );
  }
}

LoginCredentials.propTypes = {
  userConnection: PropTypes.func
};

export default LoginCredentials;

