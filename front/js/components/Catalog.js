/**
 * @file Catalog component: Complete Avenger profile
 */

/* External files */
import React from 'react';
import {withRouter} from 'react-router-dom';
import {Image, Button} from 'react-bootstrap';
import PropTypes from 'prop-types';

/* Project files */
import Api from '../lib/Api';
import UiParams from '../lib/UiParams';
import {userAuthentified} from  '../lib/AuthToken.js';
import getLogger from '../utils/logger';

const log = getLogger('Catalog');

class Catalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {avengerData: []};
    this.hero_name_url = props.match.params.hero_name_url;
    this.api = new Api;
    this.ui = new UiParams;
  }

  componentDidMount() {
    const url = this.api.avengerUrl + this.hero_name_url;

    fetch(url)
      .then(response => {

        // Error management for data not found
        // When HTTP status is changed from 200 to 404 in Rails, the json sent is empty
        //log.debug('response.json()=', JSON.stringify(response.json()) );

        if (response.ok) {    
          return response.json();
        }
        
        throw new Error('API fetch failed: HTTP status is not in 2xx range');
      })
      .then(response =>{
        // If the API answer with code 2xx (success) and a JSON error message...
        if(response.error){
          throw new Error('API fetch failed ' + response.error);
        }

        this.setState({ avengerData: response });
        document.title = `${this.ui.mainTitle}: ${this.state.avengerData.super_hero_name}`;
        log.info('API fetch successful!');
      })
      .catch( (error) => log.debug('Error fetching url:', url, '->', error.message));
  }

  getStatus(avengerData) {
    if(avengerData.status === 'active') { return 'actif';  }
    else                                { return 'retiré'; }
  }

  render() {
    const avengerData = this.state.avengerData;
    const heroImageUrl = this.api.heroImageUrl + this.hero_name_url;
    const charImageUrl = this.api.charImageUrl + this.hero_name_url;

    return (
      <div>
        <h1>Catalogue </h1>
        <h2>{avengerData.super_hero_name}</h2>
        <p>Nom Réel: {avengerData.real_name} <br/>
          Status: {this.getStatus(avengerData)} <br/> 
          Age: {avengerData.age} <br/>
          Description: {avengerData.description} <br/>
        </p>
        <div>
          <Image rounded fluid className="my-2"  src={heroImageUrl} 
            alt={`${avengerData.super_hero_name} picture`}  />
        </div>
        <div>
          <Image rounded fluid className="my-2" src={charImageUrl}
            alt={`${avengerData.real_name} picture`} />
        </div>
      </div>
    );
  }
}

Catalog.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
    params: PropTypes.shape({
      hero_name_url: PropTypes.string
    })
  })
};

export default withRouter(Catalog);
