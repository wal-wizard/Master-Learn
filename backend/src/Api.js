const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();

const API = express();

//midlewares
API.use(express.json());
API.use(express.urlencoded({ extended: true }));
API.use(cors());
API.use(helmet());

//routes

//db connection
require("../config/DB");

//server
API.listen(process.env.PORT, () => {
    console.log(`App listening on PORT ${process.env.PORT}`);
})