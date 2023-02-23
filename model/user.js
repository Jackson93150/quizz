const db = require("../config/database");

class User {
  constructor(d) {
    if (d != null) {
      this._id = d.id;
      this._username = d.username;
      this._password = d.password;
      this.created = d.created;
      this._modified = d.modified;
    }
  }
}
module.exports = User;
