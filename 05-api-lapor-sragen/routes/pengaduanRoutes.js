const router = require("express").Router();
const ROLE = require("../config/role");
const controller = require("../controllers/pengaduanController")
const auth = require("../middleware/authMiddleware")
const role = require("../middleware/roleMiddleware")

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
router.post("/", auth, role(ROLE.USER), controller.create)
router.get("/", auth, role(ROLE.ADMIN), controller.getAll)

/*
GET : http://localhost:3000/api/pengaduan/4
*/
router.get("/:id", auth, role(ROLE.ADMIN), controller.getById)
/*
PUT : http://localhost:3000/api/pengaduan/4
body -> raw -> json: 
{
    "judul": "Ubah judul ",
    "isi": "ubah isi"
} 
*/
router.put("/:id", auth, role(ROLE.ADMIN), controller.update)
/*
DELETE : http://localhost:3000/api/pengaduan/4
*/
router.delete("/:id", auth, role(ROLE.ADMIN), controller.delete)

module.exports = router