
const dataParser = require('pionners-dataparser')
const {userLogin} = require('./controllers/auth')

module.exports.routes = {
    '/api/login':{
        POST: {
          function: userLogin,
          middlewares: [dataParser]
        }
    }
}
