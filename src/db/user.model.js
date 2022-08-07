const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserRecordSchema = new Schema(
  {
    userID: { type: String },
    name: { type: String },
    score: { type: Number },
    streak: { type: Number },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("userRecordModel", UserRecordSchema);
