const fs = require('fs')
const dotenv = require('dotenv')
process.chdir(__dirname);
const env = dotenv.parse(fs.readFileSync('.env'))

const serverConfig = {
    hostname: env.HOST,
    port: env.PORT,
    eventEmitter: null,
    event: "new-request"
};
const routerConfig = {
    eventEmitter: null,
    event: "new-request"
};
const databaseConfig = {
    user: env.USERNAME,
    host: env.DATABASEHOST,
    password: env.PASSWORD,
    database: env.DATABASE,
    port: env.DATABASEPORT,
    ssl: {
        rejectUnauthorized: false
    },
    client_encoding: 'utf8'
};
const tokenConfig = {
    tokenKey: env.TOKEN_KEY,
    expireTime: '24h'
}
const statusCodes = {
    SUCCESS: 200,
    NOT_FOUND: 404,
    INTERNAL_ERROR: 500,
    UNAUTHORIZED: 401
};

const contentTypes = {
    JSON: 'application/json'
};

const appsDirectory = './apps';

module.exports = {
    serverConfig,
    routerConfig,
    databaseConfig,
    appsDirectory,
    contentTypes,
    tokenConfig,
    statusCodes,
    env,
};