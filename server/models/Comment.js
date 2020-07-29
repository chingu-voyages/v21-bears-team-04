const DBbase = require("./DBbase");
const Joi = require("@hapi/joi");

class Comment extends DBbase {
  // 'table' used by DBbase to map class to specific table name
  static table = "comments";

  // 'validColumnNames' used by DBbase to check for valid properities on each model
  static validColumnNames = [
    "user_id",
    "resource_id",
    "resource_type",
    "content",
    "updated_at"
  ];

  // "id" serial NOT NULL,
  // "user_id" int NOT NULL,
  // "resource_id" int NOT NULL,
  // "resource_type" character varying NOT NULL,
  // "content" TEXT NOT NULL,
  // "created_at" timestamp with time zone NOT NULL,
  // "updated_at" timestamp with time zone NOT NULL,

  constructor(attributes) {
    super(); // initializing super class, DBbase - communication with db methods
    if (Comment.validCommentAttributes(attributes)) {
      this.setAttributes(attributes);
    } else {
      console.log("invalid Comment attributes");
      throw new Error("invalid Comment attributes");
    }
  }

  static validCommentAttributes(attributes) {
    return true;
  }

  async save() {
    const queryText =
      "INSERT INTO comments(user_id, resource_id, content, resource_type, created_at, updated_at) VALUES ($1, $2, $3, $4, NOW(), NOW()) RETURNING *";
    const query = {
      text: queryText,
      values: [this.user_id, this.resource_id, this.content, this.resource_type]
    };
    const queryResult = await this.query(query);
    const newRecord = queryResult[0];
    // make sure this has the updated attributes
    this.id = newRecord.id;
    this.created_at = newRecord.created_at;
    this.updated_at = newRecord.updated_at;
    return this;
  }

  async update(attributes) {
      
    if (Comment.validCommentAttributes(attributes) && this.id) {
      // update model
      this.setAttributes(attributes);
      const queryText =
        "UPDATE comments SET user_id=$1, resource_id=$2, content=$3, resource_type=$4, updated_at=NOW() WHERE id=$5 RETURNING *";
      const query = {
        text: queryText,
        values: [this.user_id, this.resource_id, this.content, this.resource_type, this.id]
      };
      const queryResult = await this.query(query);
      //console.log(queryResult);
      const newRecord = queryResult[0];
      if (newRecord) {
        this.updated_at = newRecord.created_at
        this.content = newRecord.content
        return true;
      }
    } else {
      console.log("Invalid attributes supplied to update");
    }



  }

  async delete() {
    if (this.id) {
      const queryText = "DELETE FROM comments WHERE id=$1";
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
}


//async function test() {
  // testing .save
  // const newComment = new Comment({user_id: 1, resource_id: 1, resource_type: "activity", content: "bengal cats are amazing!"})
  // await newComment.save()
  // console.log(newComment)
  
  // testing .delete
  //  const newComment = new Comment({user_id: 1, resource_id: 1, content: "that was a great run", resource_type: "activity"})
  //  await newComment.save()
  //  console.log("newComment", newComment)
  //  await newComment.delete()
  //  const findNewComment = await Comment.find(newComment.id)
  //  console.log("findNewComment is gone, should be undefined", findNewComment)

  // testing .update
//   const newComment = new Comment({
//     user_id: 1,
//     resource_id: 1,
//     content: "awesome running george",
//     resource_type: "activity"
//   });
//   await newComment.save();
//   console.log("newComment before update", newComment);
//   await newComment.update({ content: "my new comment is better" });
//   const findNewComment = await Comment.find(newComment.id);
//   console.log("newComment after update", findNewComment);
//  }

// test();

module.exports = Comment;
