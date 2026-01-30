const router = require('express').Router()
const auth = require("../controllers/authController")
/*
POST : http://localhost:3000/api/auth/register
body -> raw -> json :
    {
    "username": "fa@f.com",
    "password": "123123",
    "confirm_password":"123123"
}
*/
router.post("/register", auth.register)

/* 
POST : http://localhost:3000/api/auth/register
*/
router.post("/login", auth.login)

module.exports = router