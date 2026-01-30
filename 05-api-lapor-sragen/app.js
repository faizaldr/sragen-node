const mainApp = function (app) {
    // menggunakan fitur json request response
    const express = require("express")
    app.use(express.json())
    app.use('/api/pengaduan', require("./routes/pengaduanRoutes"));
    app.use('/api/auth', require("./routes/authRoutes"));
}

module.exports = mainApp