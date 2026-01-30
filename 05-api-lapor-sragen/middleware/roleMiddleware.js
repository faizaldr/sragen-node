const { BODY } = require("../config/responseBody")

module.exports = role => {
    return (req, res, next) => {
        if (req.user.role !== role) {
            const body = BODY
            body.status = "403"
            body.message = "Akses hak akses ditolak"
            body.data = null
            return res.status(403).json(body)
        }
        next();
    }
}