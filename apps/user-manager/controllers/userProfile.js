
const c = require('../config');
const { readProfile } = require('../model/readProfile');
const { sendOk, sendFail } = require('../../../utils/response-handler');
const { queryStringValidate } = require('../../../utils/queryValidate')

function getProfileById(req, res) {
    const qs = req.qs;
    if (!queryStringValidate(qs, [])) {
        return sendFail(res, c.statusCodes.NOT_FOUND, { message: c.errors.NOT_FOUND.message });
    }
    let userId = req.user ? req.user.userId : 0; // if we have no valid token, we set userId = 0
    let profileId;
    if (req.params.profileId) {
        profileId = req.params.profileId;
    } else {
        profileId = userId;
    }
    let postLimit = c.defaultPostLimit;
    const response = readProfile(userId, profileId, postLimit);
    response
        .then(data => sendOk(res, data))
        .catch(() => sendFail(res, c.statusCodes.NOT_FOUND, c.errors.NOT_FOUND))
}
module.exports = {
    getProfileById
}