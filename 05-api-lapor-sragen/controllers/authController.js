const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Joi = require("joi")
const { User } = require("../models")
const { BODY } = require("../config/responseBody")
const ROLE = require('../config/role')

const registerSchema = Joi.object({
    username: Joi.string().email().required().message({
        'string.empty': "Username (email) wajib diisi",
        'string.email': "Username harus format email",
    }),
    password: Joi.string().min(6).required().message({
        'string.empty': "Password harus diisi",
        'string.min': "Password minimal 6 karakter",
    }),
    confirm_password: Joi.any()
        .valid(Joi.ref("password"))
        .required().message({
            'any.only': "Password dan konfirmasi password berbeda",
            'any.requre': "Konfirmasi password harus diisi",
        }),
})

exports.register = async (req, res) => {
    const { error, value } = registerSchema.validate(req.body)
    const body = BODY

    if (error) {
        body.status = 400
        body.message = "Terjadi eror saat registrasi"
        body.data = error.details
        return res.status(400).json(body)
    }

    const { username, password } = value

    const existing = await User.findOne({ where: { username } })
    if (existing) {
        body.status = "409"
        body.message = "Username sudah digunakan";
        body.data = null
        return res.status(409).json(body)
    }

    const hashed = await bcrypt.hash(password, 10)
    const newUser = await User.create({
        username,
        password: hashed,
        role: ROLE.USER
    })
    body.status = "200"
    body.message = "Berhasil Mendaftar"
    body.data = newUser
    return res.status(200).json(body)
}