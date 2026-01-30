const router = require('express').Router()
const auth = require("../controllers/authController")
router.post("/login", auth.register)