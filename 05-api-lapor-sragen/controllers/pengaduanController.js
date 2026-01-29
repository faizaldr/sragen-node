exports.create = async (req, res) => {
    const { judul, isi } = req.body
    const pengaduan = {
        judul: judul,
        isi: isi
    }

    const body = {
        "status": "200",
        "message": "success",
        "data": pengaduan
    }
    return res.json(body)
}