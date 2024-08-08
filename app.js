const express = require('express')
const bodyParser = require("body-parser")
const path = require('path')
const dotenv = require("dotenv")
const connectMongodb = require("./init/mongodb")
const todoRoute = require("./routes/todo")

dotenv.config()

// Init App
const app = express()

// Connect Mongo Db
connectMongodb()

app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")))
app.use(bodyParser.urlencoded({ extended: true }))
app.use("/", todoRoute)

module.exports = app