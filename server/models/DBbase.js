const DatabaseAdapter = require("../database/DatabaseAdapter");

class DBbase {
  constructor(adapter) {
    this.connection = adapter;
  }

  async query(q) {
    return this.connection.query(q);
  }
}

// uncomment example to test

// const adapter = new DatabaseAdapter({
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   user: process.env.DB_USER,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD
// });

// const dbBase = new DBbase(adapter);

// async function test() {
//   const result = await dbBase.query("SELECT NOW();");
//   console.log(result);
// }

// test();

module.exports = DBbase;
