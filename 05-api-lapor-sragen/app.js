const mainApp = function (app) {
    app.use('/api/pengaduan', require("./routes/pengaduanRoutes"));
}

module.exports = mainApp