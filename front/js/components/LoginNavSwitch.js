/**
 * @file Navigation component.
 */

/* External files */
import React from 'react';
import Modal from 'react-modal';
import {Link, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

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
Modal.setAppElement(document.getElementById('app'));

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
      props.history.go();
    }
  }

  if(props.userConnection == true) {
    return(
    <>
      <Link to="/logout">Se déconnecter</Link> <span> </span>
      <button onClick={openNewAvenger}>Ajouter un avenger</button>
      <PopUpNewAvenger setRedirectTarget={setRedirectTarget} handleClose={closeNewAvenger} IsOpen={newAvengerIsOpen} />
    </>);
  }
  else {
    return(<Link to="/login">Se connecter</Link>);
  }
};
//  <br/><br/>
const PopUpNewAvenger = (props) => {
  // Well... it made sense at first to do add another component 
  // this could go directly in NewAvenger return so the withRouter chain would
  // give access to history and we would not need 'setRedirectTarget'
  return(
      <div>
      <Modal
          isOpen={props.IsOpen}
          onRequestClose={props.handleClose}
          style={customStyles}
          contentLabel="PopUpNewAvenger"
        >
          <NewAvenger setRedirectTarget={props.setRedirectTarget} handleClose={props.handleClose} />
        </Modal>
        </div>
  );
};

// Prop types -----------------------
LoginNavSwitch.propTypes = {
  userConnection: PropTypes.bool,
  openNewAvenger: PropTypes.func,
  closeNewAvenger: PropTypes.func
};

PopUpNewAvenger.propTypes = {
  IsOpen: PropTypes.bool,
  handleClose: PropTypes.func
};

export default withRouter(LoginNavSwitch);
