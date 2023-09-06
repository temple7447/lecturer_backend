const express = require("express")
const app = express()
const dotenv = require('dotenv').config()
const mongoose = require("mongoose");
require("./config/db")
const cors = require('cors');
const AssignmentRouter = require("./Routes/Assignment")









const PORT = process.env.PORT || 4000

app.use(express.json()); // For parsing JSON data in request bodies
app.use(express.urlencoded({ extended: false }));
app.use(cors());



app.get('/', (req, res) => {
   res.json("hellow orkd")
})
app.use('/', AssignmentRouter)








app.listen(PORT, () => {
    console.log(`server is running on Port ${PORT}`)
})