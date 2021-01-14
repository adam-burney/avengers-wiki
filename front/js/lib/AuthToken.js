/**
 * Authentification token access
 * 
 * Security concerns: Same origin is requiered for access to local storage.
 * Origin: 2 elemets in the URL, 1) protocol, 2) host (domain), and 3) port
 * We also consider that myapp.maindomain.com is a different origin than maindomain.com
 */

function getToken() {
  return(localStorage.getItem('aToken'));
}

function setToken(userToken) {
  localStorage.setItem('aToken', userToken);
}

function clearToken() {
  localStorage.removeItem('aToken');
}

function userAuthentified() {
  if(typeof localStorage.getItem('aToken') === 'string'){
    // For a wiki website, there is no need to do more to prevent hacking
    // of the UI.  The real / effective protection is the API token decoding.
    return true;
  }
  else{
    // When the item 'aToken' does not exists, we get 'object' type
    return false;
  }
}

export {getToken, setToken, clearToken, userAuthentified};