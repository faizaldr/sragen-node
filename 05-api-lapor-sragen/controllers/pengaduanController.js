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

exports.getById = async (req, res) => {
    const { id } = req.params
    const pengaduanDB = await Pengaduan.findByPk(id)

    const body = BODY;
    if (!pengaduanDB) {
        body.status = "404";
        body.message = "Data tidak ditemukan";
        return res.status(404).json(body);
    }

    body.data = pengaduanDB;
    body.message = "success";
    return res.json(body);
}