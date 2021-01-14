/**
 * @file Api interface javascript class.
 */

class Api {
    constructor() {
      this.domainUrl = `http://127.0.0.1:3000/`;

      // domain/avenger
      this.avengerUrl = this.domainUrl + `avenger/`;
      this.heroImageUrl = this.avengerUrl + 'heroimg/';
      this.charImageUrl = this.avengerUrl + 'charimg/';

      // domain/user
      this.userUrl = this.domainUrl + 'user/';

      // domain/authenticate
      this.authenticateUrl = 'authenticate/';
    }

    heroNameToUrl(heroName) {
      return(heroName.toLowerCase().replace(' ','_'));
    }
  }

export default Api;