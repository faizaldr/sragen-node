const router = require("express").Router();

// http://localhost:3000/api/pengaduan/cek
router.get("/cek", (req, res) => {
    return res.json(
        { "message": "success" }
    )
})

module.exports = router