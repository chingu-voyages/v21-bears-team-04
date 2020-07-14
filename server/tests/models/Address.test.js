require("dotenv").config();
//const DatabaseAdapter = require("../../database/DatabaseAdapter");
const Address = require("../../models/Address");
// make sure to have environmental variables via the .env file setup to connect to fitness_test
// make sure to drop the relevant tables before tests or groups of tests if its needed for the tests
// There are going to be two basic sorts of tests - those for methods only deal with table that corresponds to the model
// And those method tests that require other models.
// a good way to proceed is to fill out the tests for just the table methods, and not methods that touch other tables / models
// then before writing a test, for, say, address1.user(), complete the basic tests for the User model first that dont rely on other models.
// also these tests below are integration tests, cause they involve accessing our actual test DB.

describe("Address model", () => {
  //"country", "city", "postal_code", "user_id"
  const addressData = {
    country: "Japan",
    city: "Tokyo",
    postal_code: 4444,
    user_id: 1
  };
  test("An instance of Address is created", () => {
    const createdAddressAttempt = new Address(addressData);
    expect(createdAddressAttempt.constructor.name).toEqual("Address");
  });

  test("The instance of Address created has the attributes passed in", () => {
    const createdAddressAttempt = new Address(addressData);
    expect(createdAddressAttempt).toEqual(addressData);
  });

  test("The Address instance successfully saved to DB", async () => {
    Address.deleteTableRows()  // got to remove all the old rows, before testing a create function
   
    const addressData = {
      country: "JP",
      city: "Tokyo",
      postal_code: 4444,
      user_id: 1
    };
  
    const createdAddress = new Address(addressData);
    const result = await createdAddress.save()
    expect(result.constructor.name).toEqual("Address");
      
  })

});

   

    


