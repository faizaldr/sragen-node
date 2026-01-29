const { Pengaduan } = require("../models")
const { BODY } = require("../config/responseBody")

exports.create = async (req, res) => {
    const { judul, isi } = req.body
    const pengaduan = {
        judul: judul,
        isi: isi
    }

    const pengaduanDB = await Pengaduan.create(pengaduan)

    const body = {
        "status": "200",
        "message": "success",
        "data": pengaduanDB
    }
    return res.json(body)
}

exports.getAll = async (req, res) => {
    const pengaduanDB = await Pengaduan.findAll();
    const body = BODY;
    body.data = pengaduanDB;
    return res.json(body);
}

// update Pengaduan.update 
// update .save

// delete .destroy
