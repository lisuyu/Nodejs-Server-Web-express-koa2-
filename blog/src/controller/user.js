const {exec, escape} = require('../db/mysql.js')
const {genPassword} = require('../utils/cryp.js')
const login = (username, password) => {
    username = escape(username)

    //生成加密密码
    password = genPassword(password)
    password = escape(password)
    const sql = `
        select username, realname from users where username=${username} and password=${password}
    `
    console.log(sql)
    return exec(sql).then(rows => {
        return rows[0] || {}
    })
    // if (username === 'sunrifa' && password === '123456') {
    //     return true
    // }
    // return false
}

module.exports = {
    login
}