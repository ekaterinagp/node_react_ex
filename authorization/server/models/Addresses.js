const { Model } = require("objection");

class Address extends Model {
  static get tabelAddresses() {
    return "addresses";
  }
}

module.exports = Address;
