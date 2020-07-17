const DBbase = require("./DBbase");
const Joi = require("@hapi/joi");

class User extends DBbase {
  static table = "users";
  static validColumnNames = []; // TODO: fill in names
    
    constructor(attributes) {

    }


    static validUserAttributes(attributes) {


    }

    async save() {

    }
 
    async update(attributes) {

    }

    async delete() {

    }
}

module.exports = User;