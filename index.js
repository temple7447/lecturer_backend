const express = require("express")
const app = express()
const dotenv = require('dotenv').config()
const mongoose = require("mongoose");
require("./config/db")
const cors = require('cors');
const options = require('./Data/Categories')








const PORT = process.env.PORT || 4000

app.use(express.json()); // For parsing JSON data in request bodies
app.use(express.urlencoded({ extended: false }));
app.use(cors());


app.get('/Categories', (req, res) => {
    res.json(options)
})
app.get('/', (req, res) => {
    res.json(options)
})









app.listen(PORT, () => {
    console.log(`server is running on Port ${PORT}`)
})