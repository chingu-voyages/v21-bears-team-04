const DBbase = require("./DBbase");
const Joi = require("@hapi/joi");

class FeedItem extends DBbase {
  static table = "feed_items";
  static validColumnNames = []; // TODO: fill in names

  constructor(attributes) {}

  static validFeedItemAttributes(attributes) {}

  async save() {}

  async update(attributes) {}

  async delete() {}
}

module.exports = FeedItem;
