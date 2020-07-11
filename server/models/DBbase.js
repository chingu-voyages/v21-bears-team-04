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
  static ClASS_TO_TABLE_NAME = {
    // update this with mapping of class to table
    Address: "addresses",
    User: "users"
  };
  static getTableName() {
    return this.ClASS_TO_TABLE_NAME[this.name];
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

  /**
   * Return promise that resolves to an array of MyClass instances, matching col_name / val pairs
   * @param {Object} attributeInfo - the data used to find the matching records
   * @param {number} [limit=1] - max number of records returned
   */
  static async find_by(attributeInfo, limit = 1) {
    // keys of attributeInfo should be column names, and values the value of record of interest
    // attributeinfo example: {"zipcode": 7777, "country": "'AZ'"} - make sure to have double quotes around single quotes for string values
    let whereConditions = "";
    for (let columnName in attributeInfo) {
      // build up where clause
      let colValue = attributeInfo[columnName];
      whereConditions += `${columnName}=${colValue} AND `;
    }
    whereConditions = whereConditions.substring(0, whereConditions.length - 5); // remove extra AND
    const query = `SELECT * FROM ${this.getTableName()} WHERE ${whereConditions} LIMIT ${limit}`;
    const queryResult = await this.query(query);
    if (queryResult) return queryResult.map(result => new this(result));
  }

  static async query(q) {
    // query on class itself
    return this.adapter.query(q);
  }

  static async getColumnNames() {
    // returns an array of colum names for the table/class
    const query = `SELECT column_name FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = '${this.getTableName()}'`;
    const queryResult = await this.query(query);
    return queryResult.map(res => res.column_name);
  }

  async query(q) {
    // query with instance of class
    return DBbase.query(q);
  }

  async save(recordInfo = this.createDefaultRecordInfo()) {
    // saves current instance of MyClass to DB
    const cols = Object.keys(recordInfo).join(", ");
    const columnNames = cols.substring();
    const vals = Object.values(recordInfo).join(", ");
    const values = vals.substring();
    const query = `INSERT INTO ${this.table} (${columnNames}) VALUES (${values})`;
    const queryResult = await this.query(query);
    if (queryResult) return true;
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
