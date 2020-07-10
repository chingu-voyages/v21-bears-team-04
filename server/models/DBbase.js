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
