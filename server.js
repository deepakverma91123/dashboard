const express = require('express')
const app = express();
app.use(express.json())

require('./Model/Config/Config')
require("dotenv").config();


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})