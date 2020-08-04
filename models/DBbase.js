const adapter = require("../database/DatabaseAdapter");
/*

This class is meant to be extended by other classes, and not instantiated alone. 



*/

class DBbase {
  static adapter = adapter;

  static ClASS_TO_TABLE_NAME = {
    // update this with mapping of class to table
    Address: "addresses",
    User: "users",
    ActivityCategory: "activity_categories",
    Activity: "activities",
    Like: "likes",
    Comment: "comments",
    Following: "followings",
  };
  static getTableName() {
    return this.ClASS_TO_TABLE_NAME[this.name];
  }

  static async deleteTableRows() {
    const deleteQuery = `DELETE FROM ${this.getTableName()}`;
    const queryResult = await this.query(deleteQuery);
    return queryResult;
  }

  static async all() {
    const query = `SELECT * FROM ${this.getTableName()}`;

    const queryResult = await this.query(query);
    return queryResult.map((result) => new this(result));
  }

  static async find(id) {
    // grab the attributes from db, create attributes object, create and return instance of object
    // const query = `SELECT * FROM ${this.getTableName()} WHERE id=$1`;
    // const substituteValues = [id]
    const query = {
      text: `SELECT * FROM ${this.getTableName()} WHERE id=$1`,
      values: [id],
    };
    const queryResult = await this.query(query);

    if (queryResult[0]) return new this(queryResult[0]);
  }

  /**
   * Return promise that resolves to an array of MyClass instances, matching col_name / val pairs
   * @param {Object} attributeInfo - the data used to find the matching records
   * @param {number} [limit=1] - max number of records returned
   */

  static whiteListedColNames(attributeInfo) {
    const colNamesToCheck = Object.keys(attributeInfo);
    for (let colName of colNamesToCheck) {
      if (!this.validColumnNames.includes(colName)) return false;
    }
    // all of the column names in the attributeInfo are on the whitelist for searching address table
    return true;
  }

  setAttributes(attributes) {
    // use this to update the model, but not the db
    for (let attribute in attributes) {
      this[attribute] = attributes[attribute];
    }
  }

  withAttributesSubsetted(keepTheseAttributes) {
    const subsetted = {};
    for (let attribute of keepTheseAttributes) {
      subsetted[attribute] = this[attribute];
    }
    return subsetted;
  }

  static allWithAttributesSubsetted(instances, keepTheseAttributes) {
    return instances.map((instance) =>
      instance.withAttributesSubsetted(keepTheseAttributes)
    );
  }

  static createValuePlaceholderString(valueCount) {
    let placeholderStr = "";
    for (let i = 1; i <= valueCount; i++) {
      placeholderStr += `$${i}, `;
    }

    return placeholderStr.substring(0, placeholderStr.length - 2);
  }

  static async in(columnName, values) {
    // retrieves all records from this table where column_name IN ($1, $2, etc)
    // example of query, after value substitution:   SELECT * FROM users WHERE id IN (1, 2, 4)
    if (values.length === 0) return []; // need at least one value to query db
    if (!this.validColumnNames.includes(columnName))
      throw new Error("invalid col_name");
    const valuePlaceholders = this.createValuePlaceholderString(values.length);
    const queryText = `SELECT * FROM ${this.getTableName()} WHERE ${columnName} IN (${valuePlaceholders})`;
    const query = {
      text: queryText,
      values: values,
    };
    const queryResult = await this.query(query);
    if (queryResult) return queryResult.map((result) => new this(result));
  }

  static async findBy(attributeInfo, limit = 1000) {
    // keys of attributeInfo should be column names, and values the value of record of interest
    // attributeinfo example: {"zipcode": 7777, "country": 'AZ'} -
    if (!this.whiteListedColNames(attributeInfo))
      throw new Error("invalid col names");

    let whereConditions = "";
    const colNames = Object.keys(attributeInfo);
    const substituteValues = Object.values(attributeInfo);

    for (let i = 0; i < colNames.length; i++) {
      whereConditions += `${colNames[i]}=$${i + 1} AND `;
    }
    whereConditions = whereConditions.substring(0, whereConditions.length - 5); // remove extra AND
    substituteValues.push(limit);
    const queryText = `SELECT * FROM ${this.getTableName()} WHERE ${whereConditions} LIMIT $${
      substituteValues.length
    }`;
    //console.log(queryText);
    const query = {
      text: queryText,
      values: substituteValues,
    };
    const queryResult = await this.query(query);
    if (queryResult) return queryResult.map((result) => new this(result));

    // const queryResult = await this.query(query);
    //
  }

  static async query(q) {
    // query on class itself
    return this.adapter.query(q);
  }

  static async getColumnNames() {
    // returns an array of colum names for the table/class
    const query = `SELECT column_name FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = '${this.getTableName()}'`;
    const queryResult = await this.query(query);
    return queryResult.map((res) => res.column_name);
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
