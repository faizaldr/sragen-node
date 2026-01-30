const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Joi = require("joi")
const { User } = require("../models")
const { BODY } = require("../config/responseBody")
const ROLE = require('../config/role')

const registerSchema = Joi.object({
    username: Joi.string().email().required().messages({
        'string.empty': "Username (email) wajib diisi",
        'string.email': "Username harus format email",
    }),
    password: Joi.string().min(6).required().messages({
        'string.empty': "Password harus diisi",
        'string.min': "Password minimal 6 karakter",
    }),
    confirm_password: Joi.any()
        .valid(Joi.ref("password"))
        .required().messages({
            'any.only': "Password dan konfirmasi password berbeda",
            'any.requred': "Konfirmasi password harus diisi",
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

const loginSchema = Joi.object({
    username: Joi.string().email().required().messages({
        'string.empty': "Username (email) wajib diisi",
        'string.email': "Username harus format email",
    }),
    password: Joi.string().min(6).required().messages({
        'string.empty': "Password harus diisi",
        'string.min': "Password minimal 6 karakter",
    })
})


exports.login = async (req, res) => {
    const { error, value } = loginSchema.validate(req.body)
    const body = BODY

    if (error) {
        body.status = 400
        body.message = "Terjadi eror saat login"
        body.data = error.details
        return res.status(400).json(body)
    }

    const { username, password } = value

    const existing = await User.findOne({ where: { username } })
    if (!existing) {
        body.status = "404"
        body.message = "Username/password salah";
        body.data = null
        return res.status(404).json(body)
    }

    const match = await await bcrypt.compare(password, existing.password)
    if (!match) {
        body.status = '404'
        body.message = "Username/password salah";
        body.data = null
        return res.status(404).json(body);
    }

    const secret_key = "LNXZKUH(!987KJASd&!@#jcaWKAE"
    const token = jwt.sign({ id: existing.id, role: existing.role },
        secret_key, { expiresIn: "1d" })

    body.status = "200"
    body.message = "Berhasil login"
    body.data = { token: token }
    return res.status(200).json(body)
}