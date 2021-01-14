/**
 * @file NewAvenger component.
 * 
 * TODO Add protection from XSS attacks
 * Also add restrictions on inputs fields to prevent wrong usage 
 * ex: allowed caracters in avengers names
 */

/* External files */
import React, { useState, useEffect } from 'react';

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
      throw new Error('API fetch failed: HTTP status is not in 2xx range');
    })
      .then(jsonData => {
        if(typeof jsonData.error === 'undefined'){
          setuserMsg(`${heroName} créé avec succès`);
          props.setRedirectTarget(`/catalog/${api.heroNameToUrl(heroName)}`);
        }
        else {
          setuserMsg(`Erreur! Le avenger que vous tentez de créer existe déjà dans la base de données.`);
          log.info('Database error: ' + jsonData.error);
          
        }
      })
      .catch( (error) => {
        let msgStr = `Une erreur est survenue lors de la connection au serveur. `;
        msgStr    += `Vous pouvez essayer à nouveau.`;
        setuserMsg(msgStr);
        log.debug('No response from API:' + error);
      });
  }

  return (      
    <div>
      <h1>{pageTitle}</h1>
      <form>
        <label>Nom de héro (obligatoire) : <br/>
        <input type="text" name="heroname" value={heroName}
        onChange={(event) => setHeroName(event.target.value)} />
        </label> <br/><br/>
        <label> Nom réel : <br/>
        <input type="text" name="realname" value={realName}
        onChange={(event) => setRealName(event.target.value)} />
        </label> <br/><br/>   
      </form>
      <button onClick={handleSubmit}>Créer</button> <span> </span>
      <button onClick={props.handleClose}>Close</button>
      <p> {userMsg} </p>
    </div>
  );
};

export default NewAvenger;

