const { Client } = require("pg");

class DatabaseAdapter {
  constructor() {
    this.client = new Client({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD
    });
  }

  listDatabases() {

    this.startConnection();
    console.log("")
    this.client.query("SELECT datname FROM pg_database;", (err, res) => {
      if (err) throw err;
      // list all the dbs
      console.log("Databases:\n");
      res.rows.forEach(row => {
        if (row.datname.substring(0, 2) === "db")
          console.log(row.datname.substring(3));
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
adapter.listDatabases();
