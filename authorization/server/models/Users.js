const { Model } = require("objection");

class User extends Model {
  static get tabelName() {
    return "users";
  }
}

module.exports = User;
