const jwt = require('jsonwebtoken')
const jwtSecret = 'e80e3a76351859df3031c0afb9e8a3b1f7d1b30ad656a96a60571848946917b79d931a'
exports.adminAuth = (req, res, next) => {
    const token = req.cookies.jwt
    if (token) {
        jwt.verify(token, jwtSecret, (err, decodedToken) => {
            if(err) {
                return res.status(401).json({message: "Not authorized"})
            } else {
                if(decodedToken.role !== "admin") {
                    return res.status(401).json({message: "Not authorized"})
                } else {
                    next()
                }
            }
        })
    } else {
        return res
        .status(401)
        .json({message: "Not authorized, token not available"})
    }
}

exports.userAuth = (req, res, next) => {
    const token = req.cookies.jwt
    if (token) {
        jwt.verify(token, jwtSecret, (err, decodedToken) => {
            if(err) {
                return res.status(401).json({message: "Not authorized"})
            } else {
                if(decodedToken.role !== "Basic") {
                    return res.status(401).json({message: "Not authorized"})
                } else {
                    next()
                }
            }
        })
    } else {
        return res
        .status(401)
        .json({message: "Not authorized, token not available"})
    }
}