const DatabaseAdapter = require("../database/DatabaseAdapter");

class DBbase {
  constructor(adapter) {
    this.connection = adapter;
  }
}

module.exports = DBbase;
