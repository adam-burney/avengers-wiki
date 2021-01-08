/**
 * @file Home component.
 */

/* External files */
import React from "react";
import { Link } from 'react-router-dom';

/* Project files */
import Api from '../lib/Api';
import UiParams from '../lib/UiParams';
import getLogger from '../utils/logger';

const log = getLogger('Home');

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allAvengersData: []
    };
    this.api = new Api;
    this.ui = new UiParams;
  }

  componentDidMount() {
    // Fetch preview data for all avengers
    fetch(this.api.avengerUrl)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        
        throw new Error('API fetch failed: HTTP status is not in 2xx range');
      })
      .then(response => {
        // If the API answer with code 2xx (success) and a JSON error message...
        if(response.error){
          throw new Error('API fetch failed ' + response.error);
        }

        this.setState({ allAvengersData: response });
        log.info('API fetch successful!');
      })
      .catch(() => log.debug('Error fetching home page preview:', error.message) );
  }
  
  getStatus(avenger) {
    if(avenger.status === 'active') { return 'actif';  }
    else                            { return 'retiré'; }
  }

  render() {
    // At this point, the REST API has been fetched for all avengers, *not the hole data
    const allAvengersData = this.state.allAvengersData;

    const avengersHtml = allAvengersData.map((avenger, index) => (
      <div key={index} className="avenger-preview">
        <img src={this.api.heroImageUrl + avenger.url_string} alt={`${avenger.super_hero_name} picture`} />
        <p className="avenger-preview">
          <Link to={`/catalog/${avenger.url_string}`}> {avenger.super_hero_name} </Link> <br/> 
          {avenger.real_name} <br/>
          Status: {this.getStatus(avenger)} <br/> 
        </p>
      </div >
    ));

    return (
      <div  id='Home'>
        <h2>Home</h2>
        <div>{allAvengersData.length > 0 ? avengersHtml : 'No data!' } </div>
      </div>
    );
  }

}

export default Home;