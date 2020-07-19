const DBbase = require("./DBbase");
const Joi = require("@hapi/joi");


class Address extends DBbase {
  // 'table' used by DBbase to map class to specific table name 
  static table = "addresses";
  static validColumnNames = [
    "id",
    "country",
    "city",
    "postal_code",
    "user_id",
    "created_at",
    "updated_at"
  ];
  constructor(attributes) {
    super(); // initializing super class, DBbase - communication with db methods
    if (Address.validAddressAttributes(attributes)) {
      this.setAttributes(attributes);
    } else {
      console.log("invalid address attributes");
      throw new Error("invalid address attributes");
    }
  }

  async user() {
    // get the user for this instance of Address
    if (this.id) {
      // User.find(this.user_id)
    } else return null;
  }

  async save() {
    //"country", "city", "postal_code", "user_id", "created_at", "updated_at"
    const queryText =
      "INSERT INTO addresses(country, city, postal_code, user_id, created_at, updated_at) VALUES ($1, $2, $3, $4, NOW(), NOW()) RETURNING *";
    const query = {
      text: queryText,
      values: [this.country, this.city, this.postal_code, this.user_id]
    };
    const queryResult = await this.query(query);
    const newRecord = queryResult[0];
    // make sure this address has the updated attributes
    this.id = newRecord.id;
    this.created_at = newRecord.created_at;
    this.updated_at = newRecord.updated_at;
    return this;
  }

  async delete() {
    if (this.id) {
      const queryText = "DELETE FROM addresses WHERE id=$1";
      const substituteValues = [this.id];
      const query = {
        text: queryText,
        values: substituteValues
      };
      await this.query(query);
    } else {
      console.log(
        "This record either (1) hasnt been saved to database, or (2) its already been deleted"
      );
    }
  }

  static validAddressAttributes(attributes) {
    const schema = Joi.object({
      id: Joi.number()
        .integer()
        .allow(null),
      country: Joi.string()
        .min(2)
        .max(3)
        .required(),
      city: Joi.string()
        .min(1)
        .max(85)
        .required(),
      postal_code: Joi.string()
        .min(3)
        .max(10)
        .required(),
      user_id: Joi.number()
        .integer()
        .required(),
      created_at: Joi.date().required(),
      updated_at: Joi.date().required()
    });
    let { value, error } = schema.validate(attributes, { abortEarly: false });
    if (error) {
      return error;
    }
    return true;
  }

  setAttributes(attributes) {
    // use this to update the model, but not the db
    for (let attribute in attributes) {
      this[attribute] = attributes[attribute];
    }
  }

  async update(attributes) {
    if (Address.validAddressAttributes(attributes) && this.id) {
      // update model
      this.setAttributes(attributes);
      const queryText =
        "UPDATE addresses SET country=$1, city=$2, postal_code=$3, user_id=$4, updated_at=NOW() WHERE id=$5 RETURNING *";
      const query = {
        text: queryText,
        values: [
          this.country,
          this.city,
          this.postal_code,
          this.user_id,
          this.id
        ]
      };
      const queryResult = await this.query(query);
      //console.log(queryResult);
      const newRecord = queryResult[0];
      if (newRecord) {
        this.updated_at = newRecord.updated_at;
        return true;
      }
    } else {
      console.log("Invalid attributes suppled to update");
    }
  }
}

// uncomment below for quick test

// async function test() {
//   try {

//       const a1 = await Address.find(23)
//       await a1.update({city: "dog city"})
//       const all = await Address.all()
//       console.log(all)

//   } catch (err) {
//     console.log(err);
//   }
// }

// test();

module.exports = Address;
