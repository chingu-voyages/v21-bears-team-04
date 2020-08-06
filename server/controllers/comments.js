const Comment = require("../models/Comment");

const create = async (req, res) => {
  const userId = req.user.id;
  const { content, activityId } = req.body.data;
  console.log(content);
  try {
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

module.exports = {
  create,
};
