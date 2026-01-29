const router = require("express").Router();
const controller = require("../controllers/pengaduanController")

// http://localhost:3000/api/pengaduan/cek
router.get("/cek", (req, res) => {
    return res.json(
        { "message": "success" }
    )
})

// method : POST, url : http://localhost:3000/api/pengaduan
router.post("/", controller.create)

module.exports = router