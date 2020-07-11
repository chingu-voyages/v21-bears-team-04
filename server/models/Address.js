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
    else {
      console.log("invalid address attributes");
      throw new Error("invalid address attributes");
    }
  }



//   save() {
//    // save this instance to db; return true on success, false on failure
   
//    const query =    
//   }

  user() {
    // get the user for this Address
    if (this.id) {
      // query user, create User instance from data
    } else return null;
  }

  validAddressAttributes(attributes) {
    return true;
  }

  setAttributes(attributes) {
    for (let attribute in attributes) {
      this[attribute] = attributes[attribute];
    }
  }
}
// uncomment below for quick test

async function test() {
  try {
    const a1 = await Address.getColumnNames();
    console.log("a1", a1);
    if (!a1) throw new Error("couldn't find record");
  } catch (err) {
    console.log(err);
  }
}

test();

module.exports = Address;
