const jwt = require('jsonwebtoken');

const JWT_SECRET = 'secretKey';
const JWT_EXPIRES_IN = '31d';

function signUser(user) {
    return jwt.sign({
        sub: user.id,
        name: user.name,
        email: user.email,
        admin: user.admin,
        id: user.id,
        registerID: user.registerID
    }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN })
}

module.exports = {
    signUser,
    JWT_SECRET
}