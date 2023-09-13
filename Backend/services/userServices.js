const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('./db-connect');
const { JWT_SECRET } = require('./jwt');

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

async function registerUser(name, email, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    });
    return signUser(user);
}

async function loginUser(email, password) {
    const user = await User.findOne({
        where: {
            email
        }
    });
    if (!user) {
        throw new Error('User not found');
    }
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
        throw new Error('Invalid password');
    }
    return signUser(user);
}

module.exports = {
    registerUser,
    loginUser
}
