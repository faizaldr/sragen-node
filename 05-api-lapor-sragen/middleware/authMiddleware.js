const jwt = require('jsonwebtoken')
const { BODY } = require('../config/responseBody')
const { secret_key } = require('../config/utils')
const body = BODY
body.status = "401"

module.exports = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]
    // Bearer eykasdbzxc.IzxcnAsdiq.kasjdhakwd

    body.message = "Token tidak ada"
    if (!token) return res.status(401).json(body)

    try {
        req.user = jwt.verify(token, secret_key)
        next()
    } catch (error) {
        body.message = "Token tidak valid"
        res.status(401).json(body)
    }
}