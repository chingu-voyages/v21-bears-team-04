require("dotenv").config();
const DatabaseAdapter = require("../database/DatabaseAdapter");

const databaseConfig = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD
};

class DBbase {
  static adapter = new DatabaseAdapter(databaseConfig);

  static getTableName() {
    // make sure to update this with a mapping of any table name / class, if you're gonna use
    // one of the methods like find in this class.

    const ClASS_TO_TABLE_NAME = {
      Address: "addresses"
    };

    return ClASS_TO_TABLE_NAME[this.name];
  }

  static async all() {
    const query = `SELECT * FROM ${this.getTableName()}`;
    const queryResult = await this.query(query);
    return queryResult.map(result => new this(result));
  }

  static async find(id) {
    // grab the attributes from db, create attributes object, create and return instance of object
    const query = `SELECT * FROM ${this.getTableName()} WHERE id=${id}`;
    const queryResult = await this.query(query);
    if (queryResult) return new this(queryResult[0]);
  }

  static async query(q) {
    // query on class itself
    return this.adapter.query(q);
  }

  async query(q) {
    // query with instance of class
    return DBbase.query(q);
  }
}

// uncomment example to test

// async function test() {
//   const db = new DBbase();
//   const result = await db.query("SELECT NOW();");
//   const result1 = await DBbase.query("SELECT NOW();");
//   console.log(result);
//   console.log(result1);
// }

// test();

module.exports = DBbase;
