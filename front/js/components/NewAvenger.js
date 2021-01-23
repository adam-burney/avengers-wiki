/**
 * @file NewAvenger component.
 * 
 * TODO Add protection from XSS attacks
 * Also add restrictions on inputs fields to prevent wrong usage 
 * ex: allowed caracters in avengers names
 */

/* External files */
import React, { useState, useEffect } from 'react';
import {Modal, Form, Button, Alert} from 'react-bootstrap';

/* Project files */
import Api from '../lib/Api';
import UiParams from '../lib/UiParams';
import {getToken} from  '../lib/AuthToken.js';
import getLogger from '../utils/logger';

const log = getLogger('NewAvenger');

const NewAvenger = (props) => {
  const pageTitle =  `Ajouter un avenger au wiki`;

  const [heroName, setHeroName] = useState('');
  const [realName, setRealName] = useState('');
  const [userMsg, setuserMsg] = useState('');
  const [alertColor, setAlertColor] = useState('success');
  const [alertVisible, setAlertVisible] = useState(false);

  useEffect(() => {
    const ui = new UiParams;
    document.title = `${ui.mainTitle}: ${pageTitle}`;
  });

  function handleSubmit(event) {
    event.preventDefault();
    const api = new Api;
    
    props.setRedirectTarget(null); // Default: no redirection

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': getToken()},
      body: JSON.stringify({ super_hero_name: heroName, real_name: realName })
    };

    fetch(api.avengerUrl, requestOptions)
      .then(response =>  {
      if (response.ok) {
        return response.json();
      }
      else {
        // TODO: Manage the case where the token is expired
        // This would be needed for every api request... time to try axios ?
        const jsonData = response.json();
        if(typeof jsonData.error === 'string') {
          // {...}
          log.debug('Error: ' + jsonData.error);
        } 

        throw new Error('Response code 401 unautorized is not managed yet');
      }

      throw new Error('API fetch failed: HTTP status is not in 2xx range');
    })
      .then(jsonData => {
        if(typeof jsonData.error === 'undefined'){
          setuserMsg(`${heroName} créé avec succès`);
          setAlertVisible(true);
          setAlertColor('success');

          // TODO: The API should return the new url instead of repeating the conversion
          // of hero_name to urls
          props.setRedirectTarget(`/catalog/${api.heroNameToUrl(heroName)}`);
        }
        else {
          setuserMsg(`Erreur! Le avenger que vous tentez de créer existe déjà dans la base de données.`);
          setAlertVisible(true);
          setAlertColor('danger');
          log.info('Database error: ' + jsonData.error);
          
        }
      })
      .catch( (error) => {
        let msgStr = `Une erreur est survenue lors de la connection au serveur. `;
        msgStr    += `Vous pouvez essayer à nouveau.`;
        setuserMsg(msgStr);
        log.debug('API request failed: ' + error);
      });
  }

  return (
    <div>
      <Modal centered show={props.show} >
        <Modal.Header closeButton>
          <Modal.Title>{pageTitle}</Modal.Title>
        </Modal.Header>

          <Modal.Body>
            <div className="p5">
            <Form>
              <Form.Label >Nom de héro (obligatoire) : </Form.Label>
              <Form.Control type="text" name="heroname" value={heroName}
              onChange={(event) => setHeroName(event.target.value)} />
              <Form.Label > Nom réel : </Form.Label>
              <Form.Control type="text" name="realname" value={realName}
              onChange={(event) => setRealName(event.target.value)} />  
            </Form>
            <Alert show={alertVisible} variant={alertColor} 
              onClose={() => setAlertVisible(false)} dismissible>
              {userMsg}
            </Alert>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="primary" onClick={handleSubmit}>Créer</Button> <span> </span>
            <Button variant="secondary" onClick={props.handleClose}>Fermer</Button>
          </Modal.Footer>
        </Modal >
    </div>
  );
};

/*
// With this code we get: "Uncaught Error: Too many re-renders."

function handleHide() {
  log.debug('handleHide() executed');
  setAlertVisible(false);
  props.handleClose;
}

return (      
  <div>
    <Modal centered show={props.show} onHide={handleHide()}>
      {...}
    </Modal >
  </div>
);

// Same error: "Uncaught Error: Too many re-renders." with:
 <Modal centered show={props.show} onHide={props.handleClose} onEntered={setAlertVisible(false)}>
// or...
 <Modal centered show={props.show} onHide={props.handleClose} onShow={setAlertVisible(false)}>
 // or...
 <Modal centered show={props.show} onHide={props.handleClose} onExited={setAlertVisible(false)}>

// Using a button, same error...
  function handleClose(handleClose) {
    log.debug('handleClose() executed');
    setAlertVisible(false);
    handleClose;
  }
  {...}
  <Modal.Footer>
    {...}
    <Button variant="secondary" onClick={handleClose(props.handleClose)}>Fermer</Button>
  </Modal.Footer>
          */

// Form.Control type="text" placeholder="Normal text" 

export default NewAvenger;

