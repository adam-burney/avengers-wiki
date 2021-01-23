/**
 * @file Navigation component.
 */

/* External files */
import React from 'react';
//import Modal from 'react-modal';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Nav, Dropdown, DropdownButton} from 'react-bootstrap';


/* Project files */
import NewAvenger from './NewAvenger';
import getLogger from '../utils/logger';

const log = getLogger('LoginNavSwitch');

// temporary...
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

// Bind Modal to the root app so Modal can "hide" other components while it's openned 
//Modal.setAppElement(document.getElementById('app'));

const LoginNavSwitch = (props) => {
  const [newAvengerIsOpen,setNewAvengerOpen] = React.useState(false);
  const [redirectTarget,setRedirectTarget] = React.useState(false);

  function openNewAvenger() {
    setNewAvengerOpen(true);
  }

  function closeNewAvenger(){
    setNewAvengerOpen(false);
    
    const target = redirectTarget;
     if(target) {
      setRedirectTarget(null);
      props.history.push(target);

      // Patch: Utile en dernier recours si la chaîne export withrouter est brisée
      // (L'application est rechargée à nouveau)
      //props.history.go();
    }
  }

  if(props.userConnection == true) {
    return(
    <>
      <NewAvenger setRedirectTarget={setRedirectTarget} handleClose={closeNewAvenger} 
        show={newAvengerIsOpen} />   
     
      <DropdownButton id="dropdown-item-button" title="Menu" variant="light"  menuAlign="right">
        <Dropdown.Header>Modifier le Wiki </Dropdown.Header>
        <Dropdown.Item onClick={openNewAvenger}>Ajouter un avenger</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="/logout">Se déconnecter</Dropdown.Item>
      </DropdownButton>
    </>);
  }
  else {
    return(<Nav.Link href="/login">Se connecter</Nav.Link>);
  }
};

// Prop types -----------------------
LoginNavSwitch.propTypes = {
  userConnection: PropTypes.bool,
  openNewAvenger: PropTypes.func,
  closeNewAvenger: PropTypes.func
};

export default withRouter(LoginNavSwitch);
