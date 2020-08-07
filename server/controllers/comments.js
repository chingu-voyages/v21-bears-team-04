const Comment = require("../models/Comment");

const create = async (req, res) => {
  try {
    const userId = req.user.id;
    const { content, activityId } = req.body.data;
    const newComment = new Comment({
      user_id: userId,
      resource_id: activityId,
      content: content,
      resource_type: "comment"
    });
    await newComment.save();
    console.log(newComment);
    res.json({comment: newComment});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

module.exports = {
  create,
};
