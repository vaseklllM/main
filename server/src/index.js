const express = require("express")
const { SERVER_PORT, DB_URL } = require("../../utils/config")
const app = express()
const mongoose = require("mongoose")
const createDefData = require("../createDefaultData")

async function start() {
  try {
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })

    app.listen(SERVER_PORT, () => {
      console.log(`---------- localhost:${SERVER_PORT} started ----------`)
    })
    createDefData()
  } catch (error) {
    console.log(error)
  }
}

start()
