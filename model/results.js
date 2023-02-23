const db = require("../config/database");

class Results {
  constructor(d) {
    if (d != null) {
      this._id = d.id;
      this._user = d.user;
      this._correct = d.total;
      this._platform = d.platform;
      this.created = d.created;
      this._modified = d.modified;
    }
  }
}
module.exports = Results;
