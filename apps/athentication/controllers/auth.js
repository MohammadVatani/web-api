const c = require('../config');
const { generateToken } = require('../../../utils/tokenManager');
const { sendOk, sendFail } = require('../../../utils/response-handler');
const { getUserDataByUsername } = require('../model/getuser');
const { hashPassword } = require('../../../utils/hashPassword');

async function userLogin(req, res) {
    const { username, password } = req.data;

    if (!(username && password)) {
        return sendFail(res, c.statusCodes.UNAUTHORIZED, { message: c.errors.UNAUTHORIZED.message })
    }
    let userData
    try {
        userData = await getUserDataByUsername(username)
    } catch (err) {
        console.log('ERROR ON LOGIN: ',err)
        return sendFail(res, c.statusCodes.UNAUTHORIZED, { message: c.errors.UNAUTHORIZED.message })
    }
    if (!isValidUser(userData, password)) {
        return sendFail(res, c.statusCodes.UNAUTHORIZED, { message: c.errors.UNAUTHORIZED.message })
    }
    const token = generateToken({ "userId": userData.userid })
    return sendOk(res, { token });
}
function isValidUser(userData, password) {
    const hashed = hashPassword(password);
    if (userData?.password === hashed) {
        return true;
    }
    return false;
}
module.exports = {
    userLogin
};