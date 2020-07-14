const DBbase = require("./DBbase");
const Joi = require('@hapi/joi')

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
    if (this.validAddressAttributes(attributes)) {
      this.setAttributes(attributes);
      this.table = "addresses"
    } else {
      console.log("invalid address attributes");
      throw new Error("invalid address attributes");
    }
  }

  user() {
    // get the user for this Address
    if (this.id) {
      // query user, create User instance from data
    } else return null;
  }
  
  validAddressAttributes(attributes) {
    const schema = Joi.object({
      id: Joi.number().integer().allow(null),
      country: Joi.string().min(2).max(3).required(),
      city: Joi.string().min(1).max(85).required(),
  		postal_code: Joi.string().min(3).max(10).required(),
      user_id: Joi.number().integer().required(),
      created_at: Joi.date().required(),
      updated_at: Joi.date().required(),
    })
    let {value, error} = schema.validate(attributes, {abortEarly: false})
    if (error) {
      return error
    }
    return true;
  }

  setAttributes(attributes) {
    for (let attribute in attributes) {
      this[attribute] = attributes[attribute];
    }
  }

  createDefaultRecordInfo() {
    // (country, city, postal_code, user_id, created_at, updated_at)
    return {
      country: this.country,
      city: this.city,
      postal_code: this.postal_code,
      user_id: this.user_id,
      created_at: this.created_at,
      updated_at: this.updated_at
    };
  }
}
// uncomment below for quick test

<<<<<<< HEAD
async function test() {
  try {
=======

// async function test() {
//   try {
>>>>>>> 040fdb93b5d7ab2e16bfff9674dcd42f63bdb55c
//     const a1 = new Address({
//       'country': "'US'",
//       'city': "'lakeville'",
//       'postal_code': '8888',
//       'user_id': '1',
//       'created_at': "NOW()",
//       'updated_at': "NOW()"
//     });
<<<<<<< HEAD
    // const success = await a1.save() 
    const a1 = await Address.find(1)
    console.log("all", a1)
=======
//     const success = await a1.save() 
//     const all = await Address.all()
//     console.log(all.length)

>>>>>>> 040fdb93b5d7ab2e16bfff9674dcd42f63bdb55c
   
  } catch (err) {
    console.log(err);
  }
}

 test();

module.exports = Address;
