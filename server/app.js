"use-strict"
const express = require ('express')
const app = express()
const bodyParser = require('body-parser')
const axios = require('axios')
const cors =require('cors')
var OAuth = require('oauth');

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var timeline =require("./routers/timeline")
app.use('/timeline',timeline)

var search = require("./routers/search")
app.use('/search',search)

var newTweet = require('./routers/newTweet')
app.use('/newTweet',newTweet)
app.listen(3000)
