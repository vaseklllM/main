const express = require("express")
const { SERVER_PORT, DB_URL, FRONTEND_URL } = require("../../utils/config")
const app = express()
const mongoose = require("mongoose")
const createDefData = require("../createDefaultData")
var cors = require("cors")
var bodyParser = require("body-parser")

app.use(cors({ origin: FRONTEND_URL }))
app.use(bodyParser.json())

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
