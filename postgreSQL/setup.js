const { Client } = require('pg')
const c = require('../config')
const q = require('./initData')

let client = new Client(c.databaseConfig)
client.connect();

function createTales() {
    return new Promise((resolve, reject) => {
        client.query(q.querySetup)
            .then(() => {
                resolve();
            })
            .catcj(err => {
                reject(err);
            });
    });
}
function addInitData(query) {
    return new Promise((resolve, reject) => {
        client.query(query)
            .then(() => {
                resolve();
            })
            .catcj(err => {
                reject(err);
            });
    });
}

async function setupDatabase() {
    try {
        await createTales()
        await addInitData(q.queryUser)
        await addInitData(q.queryArticle)
        await addInitData(q.queryComment)
        await addInitData(q.queryFollow)
        await addInitData(q.queryLike_article)
        await addInitData(q.queryLike_comment)
        await addInitData(q.querySave)
        await addInitData(q.queryTag)
        client.end()
    } catch {
        console.log('error setup ... ')
        return
    }
}

setupDatabase()