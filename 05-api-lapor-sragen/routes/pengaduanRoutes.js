const router = require("express").Router();
const controller = require("../controllers/pengaduanController")

// http://localhost:3000/api/pengaduan/cek
router.get("/cek", (req, res) => {
    return res.json(
        { "message": "success" }
    )
})

// method : POST, url : http://localhost:3000/api/pengaduan
/* body -> raw -> json :
{
    "judul": "Kerusakan jalan di depan SPBU kali jambe",
    "isi": "terjadi kerusakan sejak 1 bulan dan belum diperbaiki"
} 
*/
router.post("/", controller.create)
router.get("/", controller.getAll)
router.get("/:id", controller.getById)

module.exports = router