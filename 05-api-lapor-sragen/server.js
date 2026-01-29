'use strict';

const express = require("express");
const mainApp = require("./app");
const app = express();

app.listen(3000, /*callback function */ ()=>{
    console.log("API Lapor Sragen Berhasil Berjalan")
})