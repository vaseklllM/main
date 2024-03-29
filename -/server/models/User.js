const { Schema, model } = require("mongoose")

const schema = new Schema({
  email: { type: String, required: true, unique: true },
  nickname: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  _financeId: {
    type: Schema.Types.ObjectId,
    ref: "Finance",
  },
})

module.exports = model("User", schema)
