const { Pool } = require('pg');
require('dotenv').config();

class DatabaseAdapter {
  constructor(connectionInfo) {
    this.pool = new Pool(connectionInfo);
    console.log('\nconnected to db\n');
  }

  async query(q) {
    const query = await this.pool.query(q);
    return query.rows;
  }

  async listConnectedDBName() {
    const query = 'SELECT current_database();';
    const result = await this.query(query);
    console.log(`\nCurrently connected to DB: ${result[0].current_database}\n`);
  }

  async listAllTableNames() {
    const query =
      "SELECT table_name FROM information_schema.tables WHERE table_schema='public';";
    const result = await this.query(query);
    // list connected db table names
    console.log('\ntable names: \n');
    result.forEach((row) => {
      console.log(`  ${row.table_name}`);
    });
  }

  async listPort() {
    const query = "SELECT * FROM pg_settings WHERE name='port';";
    const result = await this.query(query);
    // list port
    const portNumber = result[0].setting;
    console.log(`\nPort Number: ${portNumber}\n`);
  }

  async listDatabases() {
    const query = 'SELECT datname FROM pg_database;';
    const result = await this.query(query);
    console.log('Databases:\n');
    result.forEach((row) => {
      console.log(row.datname);
    });
  }
}

const adapter = new DatabaseAdapter({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
});

// example: uncomment below, add .env file in database folder with DB_HOST, DB_PORT etc.
// from server/database run 'node DatabaseAdapter.js'

async function test() {
  adapter.listPort();
  adapter.listDatabases();
  adapter.listConnectedDBName();
  adapter.listAllTableNames();
}

test();

module.exports = adapter;
