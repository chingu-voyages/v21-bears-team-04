require("dotenv").config();
const { Client } = require("pg");
const { Pool } = require("pg");

class DatabaseAdapter {
  constructor(connectionInfo) {
    this.client = new Client(connectionInfo);
    this.pool = new Pool(connectionInfo);
    console.log("\nconnected to db\n");
  }

  async query(q) {
    try {
      const client = await this.pool.connect(); // grab new client from pool
      const { rows } = await client.query(q);
      client.release(); // return client to pool
      return rows;
    } catch (err) {
      console.log("couldn't connect to db", err);
    }
  }

  queryAndDisconnect(query, queryResultF) {
    console.log("");
    this.startConnection();
    this.client.query(query, (err, res) => {
      if (err) throw err;
      queryResultF(res);
      console.log();
      adapter.endConnection();
    });
  }

  listConnectedDBName() {
    const query = "SELECT current_database();";
    const queryResultF = res => {
      // list current db
      const DBName = res.rows[0].current_database;
      console.log(`current DB: ${DBName}`);
    };
    this.queryAndDisconnect(query, queryResultF);
  }

  listAllTableNames() {
    const query =
      "SELECT table_name FROM information_schema.tables WHERE table_schema='public';";
    const queryResultF = res => {
      // list all the dbs
      const tableNames = res.rows;
      console.log("table names: \n");
      tableNames.forEach(row => {
        console.log(`  ${row.table_name}`);
      });
    };

    this.queryAndDisconnect(query, queryResultF);
  }

  listPort() {
    const query = "SELECT * FROM pg_settings WHERE name='port';";
    const queryResultF = res => {
      // list port
      const portNumber = res.rows[0].setting;
      console.log(`Port Number: ${portNumber}`);
    };

    this.queryAndDisconnect(query, queryResultF);
  }

  listDatabases() {
    const query = "SELECT datname FROM pg_database;";
    const queryResultF = res => {
      //list all the dbs
      console.log("Databases:\n");
      res.rows.forEach(row => {
        console.log(row.datname);
      });
    };
    this.queryAndDisconnect(query, queryResultF);
  }

  startConnection() {
    this.client.connect(err => {
      if (err) {
        console.error("connection error", err.stack);
      } else {
        console.log("connected\n");
      }
    });
  }

  endConnection() {
    this.client.end(err => {
      console.log("client has disconnected\n");
      if (err) {
        console.log("error during disconnection", err.stack);
      }
    });
  }
}

// example: uncomment below, add .env file in database folder with DB_HOST, DB_PORT etc.
// from server/database run 'node DatabaseAdapter.js'

// const adapter = new DatabaseAdapter({
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   user: process.env.DB_USER,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD
// });

// async function test() {
//   const result = await adapter.query("SELECT NOW();");
// }

// test();

module.exports = DatabaseAdapter;
