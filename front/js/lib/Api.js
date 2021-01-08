/**
 * @file Api interface javascript class.
 */

class Api {
    constructor() {
      this.domainUrl = `http://127.0.0.1:3000/`;
      this.avengerUrl = this.domainUrl + `avenger/`;
      this.heroImageUrl = this.avengerUrl + 'heroimg/';
      this.charImageUrl = this.avengerUrl + 'charimg/';
    }
  }

export default Api;