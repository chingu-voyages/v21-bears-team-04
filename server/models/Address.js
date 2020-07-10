const DBbase = require("./DBbase");
/*

So, here are my thoughts on Address (this is representative of all the other models).

constructor(adapter, attributes=null)

There are two basic cases where we will create instances of Address

  1. We dont yet have the address in the DB (so, we create instance, and then potentially save to db)
     - we supply an attributes object (where the info is gotten from some endpoint, like signup)
  2. We have retrieved our address info from DB, and now we're making an Address instance.
     - we retrieve the address info from the db, create an attributes object, then supply the Address instance with the attributes.
     - When we retrieve the address info from db, we'll be calling a class method like Address.find(id), and inside of that method we create an instance of Address
*/

class Address extends DBbase {
  constructor(attributes) {
    super(); // initializing super class, DBbase - communication with db methods
    if (this.validAddressAttributes) this.setAttributes(attributes);
    else console.log("Invalid Address");
  }

  static async find(id) {
    // grab the attributes from db, create attributes object, create and return instance of object
    const query = `SELECT * FROM addresses WHERE id=${id}`;
    const queryResult = await this.query(query);
    if (queryResult) return new this(queryResult[0]);
  }

  static async all() {
    const query = `SELECT * FROM addresses`;
    const queryResult = await this.query(query);
    return queryResult.map(addressAttributes => new this(addressAttributes));
  }

  validAddressAttributes(attributes) {
    return true;
  }

  setAttributes(attributes) {
      console.log(attributes)
    for (let attribute in attributes) {
      this[attribute] = attributes[attribute];
    }
  }
}
// uncomment below for quick test

async function test() {
  try {
    const addresses = await Address.all();
    console.log(addresses);
    if (!addresses) throw new Error("couldn't find record");
  } catch (err) {
    console.log(err);
  }
}

test();
