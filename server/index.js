const express = require("express")
const { SERVER_PORT, DB_URL, FRONTEND_URL } = require("../utils/config")
const app = express()
const mongoose = require("mongoose")
const createDefData = require("./createDefaultData")
const cors = require("cors")
const bodyParser = require("body-parser")
const passport = require("passport")

app.use(passport.initialize())
app.use(passport.session())
require("./passport")(passport)

app.use(cors({ origin: FRONTEND_URL }))
app.use(bodyParser.json())

require("./routes")(app) // роуты

async function start() {
  try {
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
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
