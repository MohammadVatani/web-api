const { getProfileById } = require('./controllers/userProfile')
const { getUserInfo, postUserInfo } = require('./controllers/userSetting')
const { getSavedMessages } = require('./controllers/savedMessages')
const { operationRegister } = require('./controllers/operation')
const { userRegister } = require('./controllers/userRegister')
const dataParser = require('pionners-dataparser')
const { verifyToken } = require('../../utils/tokenManager')
const { inputDataValidator } = require('./validation/validator')
const { getCsrfToken } = require('./controllers/csrfToken')
const { csrfValidate } = require('./validation/csrf')

module.exports.routes = {
  '/api/register': {
    POST: {
      function: userRegister,
      middlewares: [dataParser, inputDataValidator]
    }
  },
  '/api/users/operation': {
    POST: {
      function: operationRegister,
      middlewares: [dataParser, verifyToken, inputDataValidator, csrfValidate]
    },
  },
  '/api/users/profile/:profileId': {
    GET: {
      function: getProfileById,
      middlewares: [dataParser, verifyToken]
    }
  },
  '/api/users/profile': {
    GET: {
      function: getProfileById,
      middlewares: [dataParser, verifyToken]
    }
  },
  '/api/users/profileSetting': {
    GET: {
      function: getUserInfo,
      middlewares: [dataParser, verifyToken]
    },
    POST: {
      function: postUserInfo,
      middlewares: [dataParser, verifyToken, csrfValidate]
    }
  },
  '/api/users/savedMessages': {
    GET: {
      function: getSavedMessages,
      middlewares: [dataParser, verifyToken]
    }
  },
  '/api/users/csrf': {
    GET: {
      function: getCsrfToken,
      middlewares: [dataParser, verifyToken]
    }
  }
};
