require("dotenv").config();
//const DatabaseAdapter = require("../../database/DatabaseAdapter");
const Address = require("../../models/Address");
// make sure to have environmental variables via the .env file setup to connect to fitness_test
// make sure to drop the relevant tables before tests or groups of tests if its needed for the tests
// There are going to be two basic sorts of tests - those for methods only deal with table that corresponds to the model
// And those method tests that require other models.
// a good way to proceed is to fill out the tests for just the table methods, and not methods that touch other tables / models
// then before writing a test, for, say, address1.user(), complete the basic tests for the User model first that dont rely on other models.

async function test() {
  try {
    const a1 = new Address({
      'country': "'US'",
      'city': "'lakeville'",
      'postal_code': '8888',
      'user_id': '1',
      'created_at': "NOW()",
      'updated_at': "NOW()"
    });
    const success = await a1.save() 
    const all = await Address.all()
    console.log(all.length)
   
  } catch (err) {
    console.log("error", err);
  }
}

test()

