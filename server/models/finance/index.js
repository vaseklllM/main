const { Schema, model } = require("mongoose")

const schema = new Schema({
  /** валюти */
  currencies: {
    /** банківські карти */
    bankCards: {
      monobank: [
        {
          token: String,
          isActive: {
            type: Boolean,
            default: true,
          },
        },
      ],
      privatbank: [
        {
          isActive: {
            type: Boolean,
            default: true,
          },
        },
      ],
    },
  },
})

module.exports = model("Finance", schema)
