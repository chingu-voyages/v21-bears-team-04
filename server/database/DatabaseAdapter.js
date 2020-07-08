require("dotenv").config();
const { Client } = require("pg");

console.log(process.env);

class DatabaseAdapter {
  constructor() {
    this.client = new Client({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD
    });
  }

  listConnectedDBName() {
    this.startConnection();
    console.log("");
    this.client.query("SELECT current_database();", (err, res) => {
      if (err) throw err;
      // list current db
      const DBName = res.rows[0].current_database;
      console.log(`current DB: ${DBName}`);

      console.log();
      adapter.endConnection();
    });
  }

  listAllTableNames() {
    this.startConnection();
    console.log("");
    this.client.query(
      "SELECT table_name FROM information_schema.tables WHERE table_schema='public';",
      (err, res) => {
        if (err) throw err;
        // list all the dbs
        const tableNames = res.rows;
        console.log("table names: \n");
        tableNames.forEach(row => {
          console.log(`  ${row.table_name}`);
        });

        console.log();
        adapter.endConnection();
      }
    );
  }

  listPort() {
    this.startConnection();
    console.log("");
    this.client.query(
      "SELECT * FROM pg_settings WHERE name='port';",
      (err, res) => {
        if (err) throw err;
        // list all the dbs
        const portNumber = res.rows[0].setting;
        console.log(`Port Number: ${portNumber}`);

        console.log();
        adapter.endConnection();
      }
    );
  }

  listDatabases() {
    this.startConnection();
    console.log("");
    this.client.query("SELECT datname FROM pg_database;", (err, res) => {
      if (err) throw err;
      // list all the dbs
      console.log("Databases:\n");
      res.rows.forEach(row => {
        console.log(row.datname);
      });
      console.log();
      adapter.endConnection();
    });
  }

  startConnection() {
    this.client.connect(err => {
      if (err) {
        console.error("connection error", err.stack);
      } else {
        console.log("connected");
      }
    });
  }

  endConnection() {
    this.client.end(err => {
      console.log("client has disconnected");
      if (err) {
        console.log("error during disconnection", err.stack);
      }
    });
  }
}

const adapter = new DatabaseAdapter();
adapter.listAllTableNames();
