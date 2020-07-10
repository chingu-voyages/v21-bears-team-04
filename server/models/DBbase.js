const DatabaseAdapter = require("../database/DatabaseAdapter");

class DBbase {
  constructor(adapter) {
    this.connection = adapter;
  }


  async query(q) {
    return this.connection.query(q);
  }
}

const adapter = new DatabaseAdapter({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD
  });



async function stuff() {
    const res = await DBbase.query("SELECT NOW();")
    console.log(res)
}

stuff();



module.exports = DBbase;
