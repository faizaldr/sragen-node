'use strict';

const express = require("express");
const mainApp = require("./app");
const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    next()
})

mainApp(app);

app.listen(3000, /*callback function */() => {
    console.log("API Lapor Sragen Berhasil Berjalan")
})