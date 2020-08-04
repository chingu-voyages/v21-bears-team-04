//const DatabaseAdapter = require("../../database/DatabaseAdapter");
const Address = require("../../models/Address");
// make sure to have environmental variables via the .env file setup to connect to fitness_test
// make sure to drop the relevant tables before tests or groups of tests if its needed for the tests
// There are going to be two basic sorts of tests - those for methods only deal with table that corresponds to the model
// And those method tests that require other models.
// a good way to proceed is to fill out the tests for just the table methods, and not methods that touch other tables / models
// then before writing a test, for, say, address1.user(), complete the basic tests for the User model first that dont rely on other models.
// also these tests below are integration tests, cause they involve accessing our actual test DB.
// atomic table method: term i'm using to refer to a method that queries same table as model; so Address.find queries the addresses table
describe("Address model, Atomic table methods", () => {
  //"country", "city", "postal_code", "user_id"
  const validAddressData1 = {
    country: "JP",
    city: "Tokyo",
    postal_code: 44444,
    user_id: 1
  };

  const validAddressData2 = {
    country: "US",
    city: "Ohio",
    postal_code: 4234,
    user_id: 1
  };

  const validAddressData3 = {
    country: "US",
    city: "Tokyo",
    postal_code: 44444,
    user_id: 1
  };

  test("An instance of Address is created", () => {
    const createdAddressAttempt = new Address(validAddressData1);
    expect(createdAddressAttempt.constructor.name).toEqual("Address");
  });

  test("The instance of Address created has the attributes passed in", () => {
    const createdAddressAttempt = new Address(validAddressData1);
    expect(createdAddressAttempt).toEqual(validAddressData1);
  });

  test("The Address instance successfully saved to DB", async () => {
    Address.deleteTableRows(); // remove all the old rows, before testing a create function

    const createdAddress = new Address(validAddressData1);
    const savedAddress = await createdAddress.save();
    expect(savedAddress.constructor.name).toEqual("Address");
  });

  test("After saving Address instance to db, id is successfully set as num on instance", async () => {
    Address.deleteTableRows(); // remove all the old rows, before testing a create function
    const createdAddress = new Address(validAddressData1);
    const savedAddress = await createdAddress.save();
    expect(typeof savedAddress.id).toEqual(typeof 1);
  });

  test("Expect Address.all() to return an array of All Address instances in table", async () => {
    Address.deleteTableRows();
    const createdAddress1 = new Address(validAddressData1);
    await createdAddress1.save();
    const createdAddress2 = new Address(validAddressData2);
    await createdAddress2.save();
    const allAddresses = await Address.all();
    expect(allAddresses.constructor.name).toEqual([].constructor.name);
    expect(allAddresses.length).toEqual(2);
    // make sure each returned item is an instance of Address
    allAddresses.forEach(address =>
      expect(address.constructor.name).toEqual("Address")
    );
  });

  test("Address.find(id) successfully returns address instance by id", async () => {
    Address.deleteTableRows(); // remove all the old rows, before testing a create function
    const createdAddress = new Address(validAddressData1);
    await createdAddress.save();
    //console.log("Created Address", createdAddress)
    const foundAddress = await Address.find(createdAddress.id);
    //console.log("foundAddress", foundAddress)
    expect(foundAddress.constructor.name).toEqual("Address");
    expect(foundAddress.id).toEqual(createdAddress.id);
    expect(foundAddress.city).toEqual(createdAddress.city);
    expect(foundAddress.country).toEqual(createdAddress.country);
    expect(foundAddress.postal_code).toEqual(createdAddress.postal_code);
    expect(foundAddress.user_id).toEqual(createdAddress.user_id);
  });

  test("Address.findBy() returns array of Address instances", async () => {
    Address.deleteTableRows();
    const createdAddress = new Address(validAddressData1);
    await createdAddress.save();
    const createdAddress2 = new Address(validAddressData2);
    await createdAddress2.save();
    const foundAddresses = await Address.findBy({ id: createdAddress.id });
    foundAddresses.forEach(address =>
      expect(address.constructor.name).toEqual("Address")
    );
  });

  test("Address.findBy({country: 'aCountry'}, 3) returns all and only isntances with that country up to limit", async () => {
    Address.deleteTableRows();
    const createdAddress = new Address(validAddressData1);
    await createdAddress.save();
    const createdAddress2 = new Address(validAddressData2);
    await createdAddress2.save();
    const createdAddress3 = new Address(validAddressData3);
    await createdAddress3.save();
    const limit = 3;
    const foundAddresses = await Address.findBy({ country: "US" }, limit);
    expect(foundAddresses.length).toEqual(2);
    foundAddresses.forEach(address => expect(address.country).toEqual("US"));
  });
  test("Address.findBy({country: 'aCountry'}) returns the first matching record instance in an array", async () => {
    Address.deleteTableRows();
    const createdAddress = new Address(validAddressData1);
    await createdAddress.save();
    const createdAddress2 = new Address(validAddressData2);
    await createdAddress2.save();
    const createdAddress3 = new Address(validAddressData3);
    await createdAddress3.save();
    const foundAddresses = await Address.findBy({ country: "US" });
    expect(foundAddresses.length).toEqual(1);
    foundAddresses.forEach(address => expect(address.country).toEqual("US"));
  });

  test("Address.findBy({country: 'aCountry', aCity: 'aCity'}, 3) returns the single matching instance", async () => {
    Address.deleteTableRows();
    const createdAddress = new Address(validAddressData1);
    await createdAddress.save();
    const createdAddress2 = new Address(validAddressData2);
    await createdAddress2.save();
    const createdAddress3 = new Address(validAddressData3);
    await createdAddress3.save();
    const foundAddresses = await Address.findBy(
      { country: "US", city: "Ohio" },
      3
    );
    expect(foundAddresses.length).toEqual(1);
    expect(foundAddresses[0].country).toEqual("US");
    expect(foundAddresses[0].city).toEqual("Ohio");
  });

  test("Address.findBy({postal_code: aPostalCode, aCity: 'aCity'}, 3) returns only matching instances", async () => {
    Address.deleteTableRows();
    const createdAddress = new Address(validAddressData1);
    await createdAddress.save();
    const createdAddress2 = new Address(validAddressData2);
    await createdAddress2.save();
    const createdAddress3 = new Address(validAddressData3);
    await createdAddress3.save();
    const foundAddresses = await Address.findBy(
      { postal_code: 44444, city: "Tokyo" },
      3
    );
    expect(foundAddresses.length).toEqual(2);
    expect(foundAddresses[0].postal_code).toEqual(44444);
    expect(foundAddresses[0].city).toEqual("Tokyo");
    expect(foundAddresses[1].postal_code).toEqual(44444);
    expect(foundAddresses[1].city).toEqual("Tokyo");
  });

  test("address1.update({city: 'aNewCity'}) successfully updates single city instance of model instance and db", async () => {
    Address.deleteTableRows();
    const createdAddress = new Address(validAddressData1);
    await createdAddress.save();
    const newCity = "amazing city";
    await createdAddress.update({ city: newCity });
    expect(createdAddress.city).toEqual(newCity); // validate update to model
    const foundAddress = (await Address.findBy({ city: newCity }))[0];
    expect(foundAddress).toEqual(createdAddress); // validate update to db
  });

  test("address1.update({city: 'aNewCity', country: 'NZ'}) successfully updates single city instance of model instance and db", async () => {
    Address.deleteTableRows();
    const createdAddress = new Address(validAddressData1);
    await createdAddress.save();
    const newCity = "amazing city";
    const newCountry = "NZ";
    await createdAddress.update({ city: newCity, country: newCountry });
    expect(createdAddress.city).toEqual(newCity); // validate update to model
    expect(createdAddress.country).toEqual(newCountry); // validate update to model
    const foundAddress = (
      await Address.findBy({ city: newCity, country: newCountry })
    )[0];
    expect(foundAddress).toEqual(createdAddress); // validate update to db
  });
});
